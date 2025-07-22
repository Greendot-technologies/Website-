const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Place an order
router.post('/place', orderController.placeOrder);

// Get all orders by user ID
router.get('/:user_id', orderController.getOrders);

module.exports = router;
