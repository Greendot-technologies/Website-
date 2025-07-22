const pool = require('../config/db.config');
exports.getSliders = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM slider');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};