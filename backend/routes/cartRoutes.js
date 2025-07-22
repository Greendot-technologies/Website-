const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Add to cart
router.post('/add', cartController.addToCart);

// Get cart by user ID
router.get('/:user_id', cartController.getCart);

// Remove item from cart
router.delete('/:id', cartController.removeFromCart);

module.exports = router;
