
const pool = require('../config/db.config'); // your PostgreSQL pool


exports.placeOrder = async (req, res) => {
  const { user_id, shipping_address, payment_method } = req.body;

  const cartRes = await pool.query(`
    SELECT c.product_id, c.quantity, p.discounted_price
    FROM cart_items c
    JOIN products p ON p.id = c.product_id
    WHERE c.user_id = $1
  `, [user_id]);

  const cartItems = cartRes.rows;
  const totalAmount = cartItems.reduce((sum, item) => sum + item.discounted_price * item.quantity, 0);

  const order = await pool.query(`
    INSERT INTO orders (user_id, shipping_address, payment_method, total_amount)
    VALUES ($1, $2, $3, $4)
    RETURNING id;
  `, [user_id, shipping_address, payment_method, totalAmount]);

  const orderId = order.rows[0].id;

  for (let item of cartItems) {
    await pool.query(`
      INSERT INTO order_items (order_id, product_id, quantity, price)
      VALUES ($1, $2, $3, $4)
    `, [orderId, item.product_id, item.quantity, item.discounted_price]);
  }

  await pool.query('DELETE FROM cart_items WHERE user_id = $1', [user_id]);

  res.json({ message: "Order placed successfully", order_id: orderId });
};

exports.getOrders = async (req, res) => {
  const { user_id } = req.params;
  const result = await pool.query(`
    SELECT * FROM orders WHERE user_id = $1 ORDER BY created_at DESC
  `, [user_id]);
  res.json(result.rows);
};
