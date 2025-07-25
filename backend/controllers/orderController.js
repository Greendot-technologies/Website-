// const pool = require('../config/db.config'); // your PostgreSQL pool

// exports.placeOrder = async (req, res) => {
//   const { user_id, shipping_address, payment_method } = req.body;

//   const cartRes = await pool.query(`
//     SELECT c.product_id, c.quantity, p.discounted_price
//     FROM cart_items c
//     JOIN products p ON p.id = c.product_id
//     WHERE c.user_id = $1
//   `, [user_id]);

//   const cartItems = cartRes.rows;
//   const totalAmount = cartItems.reduce((sum, item) => sum + item.discounted_price * item.quantity, 0);

//   const order = await pool.query(`
//     INSERT INTO orders (user_id, shipping_address, payment_method, total_amount)
//     VALUES ($1, $2, $3, $4)
//     RETURNING id;
//   `, [user_id, shipping_address, payment_method, totalAmount]);

//   const orderId = order.rows[0].id;

//   for (let item of cartItems) {
//     await pool.query(`
//       INSERT INTO order_items (order_id, product_id, quantity, price)
//       VALUES ($1, $2, $3, $4)
//     `, [orderId, item.product_id, item.quantity, item.discounted_price]);
//   }

//   await pool.query('DELETE FROM cart_items WHERE user_id = $1', [user_id]);

//   res.json({ message: "Order placed successfully", order_id: orderId });
// };

// exports.getOrders = async (req, res) => {
//   const { user_id } = req.params;
//   const result = await pool.query(`
//     SELECT * FROM orders WHERE user_id = $1 ORDER BY created_at DESC
//   `, [user_id]);
//   res.json(result.rows);
// };

const Razorpay = require("razorpay");
const { v4: uuidv4 } = require("uuid");

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.placeOrder = async (req, res) => {
  try {
    const { user_id, shipping_address_id, payment_method } = req.body;
    const authToken = req.headers.authorization?.split(" ")[1];

    // Validate inputs
    if (!user_id || !shipping_address_id || !payment_method) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Fetch cart items (simulated; replace with your DB logic)
    const cartItems = await /* your cart fetch logic */ [
      { id: 1, price: 100, quantity: 2 },
      { id: 2, price: 50, quantity: 1 },
    ];
    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    // Calculate total amount
    const totalAmount =
      cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) *
      100; // Convert to paise

    // Create Razorpay order
    const options = {
      amount: totalAmount,
      currency: "INR",
      receipt: `order_rcptid_${uuidv4()}`,
      payment_capture: payment_method === "cod" ? "0" : "1", // 0 for manual capture (COD), 1 for auto-capture
    };

    const order = await instance.orders.create(options);

    // Save order to database (simulated; replace with your DB logic)
    const orderId = await /* your order creation logic */ uuidv4();
    await /* your DB insert logic */ {
      order_id: orderId,
      user_id,
      shipping_address_id,
      payment_method,
      total_amount: totalAmount / 100,
      razorpay_order_id: order.id,
      status: "pending",
    };

    res.json({
      order_id: orderId,
      razorpay_order_id: order.id,
      amount: totalAmount / 100,
      key_id: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "Failed to place order" });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      order_id,
    } = req.body;

    // Verify payment signature (simulated; use Razorpay's verification logic)
    const generatedSignature =
      /* Razorpay signature verification logic */ "verified"; // Replace with actual logic
    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({ error: "Invalid payment signature" });
    }

    // Update order status in database (simulated)
    await /* your DB update logic */ {
      order_id,
      status: "completed",
      payment_id: razorpay_payment_id,
    };

    res.json({ message: "Payment verified successfully", order_id });
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ error: "Failed to verify payment" });
  }
};

exports.getOrders = async (req, res) => {
  const { user_id } = req.params;
  const result = await pool.query(
    `
    SELECT * FROM orders WHERE user_id = $1 ORDER BY created_at DESC
  `,
    [user_id]
  );
  res.json(result.rows);
};
