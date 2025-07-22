const pool = require('../config/db.config'); // your PostgreSQL pool
exports.addToCart = async (req, res) => {
  const { user_id, product_id, quantity } = req.body;
  const q = `
    INSERT INTO cart_items (user_id, product_id, quantity)
    VALUES ($1, $2, $3)
    ON CONFLICT (user_id, product_id)
    DO UPDATE SET quantity = cart_items.quantity + $3
    RETURNING *;
  `;
  const result = await pool.query(q, [user_id, product_id, quantity]);
  res.json(result.rows[0]);
};

exports.getCart = async (req, res) => {
  const { user_id } = req.params;
  const q = `
    SELECT c.*, p.name, p.discounted_price AS price, pi.image_url
    FROM cart_items c
    JOIN products p ON c.product_id = p.id
    LEFT JOIN product_images pi ON pi.product_id = p.id AND pi.is_primary = true
    WHERE c.user_id = $1;
  `;
  const result = await pool.query(q, [user_id]);
  res.json(result.rows);
};

exports.removeFromCart = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM cart_items WHERE id = $1', [id]);
  res.json({ message: "Removed" });
};
