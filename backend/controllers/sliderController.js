// const pool = require('../config/db.config');
// exports.getSliders = async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM slider');
//     res.status(200).json(result.rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// website-backend/controllers/sliderController.js
const pool = require('../config/db.config');

exports.getSliders = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM slider');
    const sliders = result.rows.map(slider => ({
      ...slider,
      imageUrl: `http://localhost:5000/uploads/${slider.image}` // 🔁 Point to Admin backend domain
    }));

    res.status(200).json(sliders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

