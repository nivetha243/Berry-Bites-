const express = require('express');
const router = express.Router();
const { placeOrder } = require('../controllers/orderController');

// Define the route for placing an order
router.post('/placeOrder', placeOrder);

module.exports = router;
