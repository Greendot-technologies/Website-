require('dotenv').config();

const Razorpay = require('razorpay');
const { Pool } = require('pg');
const crypto = require("crypto");
const pool = require('../config/db.config');
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// const createPaymentOrder = async (req, res) => {
//   const { amount, currency, receipt, user_id, shipping_address_id } = req.body;

//   try {
//     const order = await razorpay.orders.create({
//       amount: amount * 100, // Amount in paise
//       currency,
//       receipt,
//     });

//     const query = `
//       INSERT INTO orders (user_id, shipping_address_id, total_amount, razorpay_order_id)
//       VALUES ($1, $2, $3, $4)
//       RETURNING id, razorpay_order_id;
//     `;
//     const values = [user_id, shipping_address_id, amount, order.id];
//     const result = await pool.query(query, values);

//     res.status(200).json({
//       success: true,
//       paymentOrder: order,
//       orderId: result.rows[0].id,
//     });
//   } catch (error) {
//     console.error('Error creating payment order:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message,
//     });
//   }
// };

// const verifyPayment = async (req, res) => {
//   const { orderId, paymentId, signature } = req.body;

//   try {
//     const query = `
//       UPDATE orders
//       SET razorpay_payment_id = $1, razorpay_signature = $2, status = 'Confirmed', updated_at = CURRENT_TIMESTAMP
//       WHERE id = $3 AND razorpay_order_id = $4
//       RETURNING *;
//     `;
//     const values = [paymentId, signature, orderId, req.body.razorpay_order_id];
//     const result = await pool.query(query, values);

//     if (result.rowCount === 0) {
//       return res.status(400).json({
//         success: false,
//         error: 'Order not found or payment verification failed',
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: 'Payment verified successfully',
//       order: result.rows[0],
//     });
//   } catch (error) {
//     console.error('Error verifying payment:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message,
//     });
//   }
// };

// module.exports = { createPaymentOrder, verifyPayment };



// Checkout function - creates Razorpay order
const checkout = async (req, res) => {
  const { user_id, shipping_address_id, amount } = req.body;
  
  if (!user_id || !shipping_address_id || !amount) {
    return res.status(400).json({
      success: false,
      error: "user_id, shipping_address_id, and amount are required",
    });
  }

  // Validate amount
  if (amount <= 0) {
    return res.status(400).json({
      success: false,
      error: "Amount must be greater than 0",
    });
  }

  const options = {
    amount: Number(amount * 100), // Convert to paise
    currency: "INR",
    receipt: `receipt_${Date.now()}_${user_id}`,
    notes: {
      user_id: user_id,
      shipping_address_id: shipping_address_id,
    },
  };

  try {
    const order = await razorpay.orders.create(options);
    
    res.status(200).json({
      success: true,
      order,
      key_id: process.env.RAZORPAY_KEY_ID, // Send key_id to frontend
    });
  } catch (error) {
    console.error("Razorpay order creation error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to create order",
      details: error.message,
    });
  }
};

// Payment verification function
const paymentVerification = async (req, res) => {
  const { 
    razorpay_order_id, 
    razorpay_payment_id, 
    razorpay_signature, 
    user_id, 
    shipping_address_id, 
    total_amount 
  } = req.body;

  // Validate required fields
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({
      success: false,
      error: "Missing payment verification parameters",
    });
  }

  if (!user_id || !shipping_address_id || !total_amount) {
    return res.status(400).json({
      success: false,
      error: "user_id, shipping_address_id, and total_amount are required",
    });
  }

  try {
    // Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return res.status(400).json({
        success: false,
        error: "Invalid signature - Payment verification failed",
      });
    }

    // Check if order already exists
    const existingOrderQuery = `
      SELECT id FROM orders WHERE razorpay_order_id = $1
    `;
    const existingOrder = await pool.query(existingOrderQuery, [razorpay_order_id]);

    if (existingOrder.rows.length > 0) {
      return res.status(400).json({
        success: false,
        error: "Order already processed",
      });
    }

  const payment = await razorpay.payments.fetch(razorpay_payment_id);

if (payment.status !== 'captured') {
  try {
    const capture = await razorpay.payments.capture(razorpay_payment_id, payment.amount);
    console.log('Payment captured successfully:', capture);
  } catch (captureErr) {
    console.error('Capture error:', captureErr);
    return res.status(400).json({
      success: false,
      error: 'Payment capture failed',
      details: captureErr.message
    });
  }
}


    // Insert order into database
    const query = `
      INSERT INTO orders (
        user_id, 
        shipping_address_id, 
        total_amount, 
        status, 
        payment_method,
        razorpay_order_id, 
        razorpay_payment_id, 
        razorpay_signature, 
        created_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, CURRENT_TIMESTAMP)
      RETURNING id, created_at
    `;
    
    const values = [
      user_id, 
      shipping_address_id, 
      total_amount, 
      'Confirmed',
      'Online',
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature
    ];
    
    const result = await pool.query(query, values);
    
    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
      order: {
        id: result.rows[0].id,
        created_at: result.rows[0].created_at,
        status: 'Confirmed',
        payment_id: razorpay_payment_id,
        amount: total_amount
      }
    });
    
  } catch (error) {
    console.error("Payment verification error:", error);
    res.status(500).json({
      success: false,
      error: "Payment verification failed",
      details: error.message,
    });
  }
};

// Cash on Delivery order function
const codOrder = async (req, res) => {
  const { user_id, shipping_address_id, total_amount } = req.body;

  if (!user_id || !shipping_address_id || !total_amount) {
    return res.status(400).json({
      success: false,
      error: "user_id, shipping_address_id, and total_amount are required",
    });
  }

  if (total_amount <= 0) {
    return res.status(400).json({
      success: false,
      error: "Amount must be greater than 0",
    });
  }

  try {
    // Insert COD order into database
    const query = `
      INSERT INTO orders (
        user_id, 
        shipping_address_id, 
        total_amount, 
        status, 
        payment_method,
        created_at
      )
      VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP)
      RETURNING id, created_at
    `;
    
    const values = [
      user_id, 
      shipping_address_id, 
      total_amount, 
      'Pending',
      'COD'
    ];
    
    const result = await pool.query(query, values);
    
    res.status(200).json({
      success: true,
      message: "COD order placed successfully",
      order: {
        id: result.rows[0].id,
        created_at: result.rows[0].created_at,
        status: 'Pending',
        payment_method: 'COD',
        amount: total_amount
      }
    });
    
  } catch (error) {
    console.error("COD order creation error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to place COD order",
      details: error.message,
    });
  }
};

// Get payment status
const getPaymentStatus = async (req, res) => {
  const { payment_id } = req.params;

  try {
    const payment = await razorpay.payments.fetch(payment_id);
    
    res.status(200).json({
      success: true,
      payment: {
        id: payment.id,
        status: payment.status,
        amount: payment.amount,
        currency: payment.currency,
        method: payment.method,
        created_at: payment.created_at
      }
    });
  } catch (error) {
    console.error("Get payment status error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch payment status",
    });
  }
};
// Add this function to test Razorpay configuration
const testRazorpayConfig = async () => {
  console.log('=== Razorpay Configuration Test ===');
  
  try {
    // Test 1: Check if environment variables are loaded
    const testResponse = await fetch(`${API_BASE_URL}/payment/test-config`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    
    const testResult = await testResponse.json();
    console.log('Config test result:', testResult);
    
    // Test 2: Try creating a test order
    const testOrderResponse = await fetch(`${API_BASE_URL}/payment/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
        amount: 1, // ₹1 for testing
        user_id: user?.id || 1,
        shipping_address_id: selectedAddress || 1
      })
    });
    
    const testOrderResult = await testOrderResponse.json();
    console.log('Test order result:', testOrderResult);
    
    if (testOrderResult.success) {
      console.log('✅ Razorpay configuration is working');
      alert('Razorpay configuration test passed!');
    } else {
      console.log('❌ Razorpay configuration failed:', testOrderResult.error);
      alert(`Configuration test failed: ${testOrderResult.error}`);
    }
    
  } catch (error) {
    console.error('Configuration test error:', error);
    alert(`Configuration test error: ${error.message}`);
  }
};

// Add this to your backend controller (paymentController.js)
const testConfig = async (req, res) => {
  try {
    const config = {
      hasKeyId: !!process.env.RAZORPAY_KEY_ID,
      hasKeySecret: !!process.env.RAZORPAY_KEY_SECRET,
      keyIdLength: process.env.RAZORPAY_KEY_ID ? process.env.RAZORPAY_KEY_ID.length : 0,
      keyIdPrefix: process.env.RAZORPAY_KEY_ID ? process.env.RAZORPAY_KEY_ID.substring(0, 8) : 'N/A'
    };
    
    res.json({
      success: true,
      config,
      message: 'Configuration check complete'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Add this route to your payment routes
// router.get("/test-config", testConfig);

module.exports = { 
  checkout, 
  paymentVerification, 
  codOrder, 
  getPaymentStatus,
  testConfig,
  testRazorpayConfig
};