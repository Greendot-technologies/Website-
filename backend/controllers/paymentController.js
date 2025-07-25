require('dotenv').config();

const Razorpay = require('razorpay');
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createPaymentOrder = async (req, res) => {
  const { amount, currency, receipt, user_id, shipping_address_id } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Amount in paise
      currency,
      receipt,
    });

    const query = `
      INSERT INTO orders (user_id, shipping_address_id, total_amount, razorpay_order_id)
      VALUES ($1, $2, $3, $4)
      RETURNING id, razorpay_order_id;
    `;
    const values = [user_id, shipping_address_id, amount, order.id];
    const result = await pool.query(query, values);

    res.status(200).json({
      success: true,
      paymentOrder: order,
      orderId: result.rows[0].id,
    });
  } catch (error) {
    console.error('Error creating payment order:', error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const verifyPayment = async (req, res) => {
  const { orderId, paymentId, signature } = req.body;

  try {
    const query = `
      UPDATE orders
      SET razorpay_payment_id = $1, razorpay_signature = $2, status = 'Confirmed', updated_at = CURRENT_TIMESTAMP
      WHERE id = $3 AND razorpay_order_id = $4
      RETURNING *;
    `;
    const values = [paymentId, signature, orderId, req.body.razorpay_order_id];
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(400).json({
        success: false,
        error: 'Order not found or payment verification failed',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Payment verified successfully',
      order: result.rows[0],
    });
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { createPaymentOrder, verifyPayment };

// const { instance } = require("../server.js");
// const crypto = require("crypto");
// const { query } = require("../config/db.config.js");

// const checkout = async (req, res) => {
//   const { user_id, shipping_address_id, amount } = req.body;
  
//   if (!user_id || !shipping_address_id || !amount) {
//     return res.status(400).json({
//       success: false,
//       error: "user_id, shipping_address_id, and amount are required",
//     });
//   }

//   const options = {
//     amount: Number(amount * 100),
//     currency: "INR",
//   };

//   try {
//     const order = await instance.orders.create(options);
//     res.status(200).json({
//       success: true,
//       order,
//     });
//   } catch (error) {
//     console.error("Razorpay error:", error);
//     res.status(500).json({
//       success: false,
//       error: "Failed to create order",
//     });
//   }
// };

// const paymentVerification = async (req, res) => {
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature, user_id, shipping_address_id, total_amount } = req.body;

//   if (!user_id || !shipping_address_id || !total_amount) {
//     return res.status(400).json({
//       success: false,
//       error: "user_id, shipping_address_id, and total_amount are required",
//     });
//   }

//   const body = razorpay_order_id + "|" + razorpay_payment_id;

//   const expectedSignature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//     .update(body.toString())
//     .digest("hex");

//   const isAuthentic = expectedSignature === razorpay_signature;

//   if (isAuthentic) {
//     try {
//       await query(
//         `INSERT INTO orders (user_id, shipping_address_id, total_amount, status, razorpay_order_id, razorpay_payment_id, razorpay_signature)
//          VALUES ($1, $2, $3, $4, $5, $6, $7)`,
//         [user_id, shipping_address_id, total_amount, 'Confirmed', razorpay_order_id, razorpay_payment_id, razorpay_signature]
//       );

//       res.redirect(
//         `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
//       );
//     } catch (error) {
//       console.error("Database error:", error);
//       res.status(500).json({
//         success: false,
//         error: "Database operation failed",
//       });
//     }
//   } else {
//     res.status(400).json({
//       success: false,
//       error: "Invalid signature",
//     });
//   }
// };

// module.exports = { checkout, paymentVerification };