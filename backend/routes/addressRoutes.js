const express = require('express');
const router = express.Router();
const {
  getAllAddresses,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress,
} = require('../controllers/addressController');
const { verifyToken } = require("../middleware/authMiddleware");

// All routes are protected - apply middleware once
router.use(verifyToken);

// GET /api/addresses - Get all addresses for logged-in user
router.get('/', getAllAddresses);

// GET /api/addresses/:id - Get specific address by ID
router.get('/:id', getAddressById);

// POST /api/addresses - Create new address
router.post('/', createAddress);

// PUT /api/addresses/:id - Update existing address
router.put('/:id', updateAddress);

// DELETE /api/addresses/:id - Delete address
router.delete('/:id', deleteAddress);

module.exports = router;