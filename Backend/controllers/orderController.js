const Order = require('../models/orderModel');
const mongoose = require('mongoose');

const placeOrder = async (req, res) => {
  try {
    const {
      userId,
      name,
      mobileNumber,
      quantity,
      paymentMethod,
      totalPrice,
      deliveryAddress // This should include city, area, nearbyShop
    } = req.body;

    // Destructure the delivery address
    const { city, area, nearbyShop } = deliveryAddress || {};

    // Validation
    const missingFields = [];
    if (!userId) missingFields.push('userId');
    if (!name) missingFields.push('name');
    if (!mobileNumber) missingFields.push('mobileNumber');
    if (!quantity || quantity < 1) missingFields.push('quantity');
    if (!paymentMethod) missingFields.push('paymentMethod');
    if (!totalPrice) missingFields.push('totalPrice');
    if (!city) missingFields.push('city');
    if (!area) missingFields.push('area');
    if (!nearbyShop) missingFields.push('nearbyShop');

    if (missingFields.length > 0) {
      return res.status(400).json({ message: 'Required fields are missing.', fields: missingFields });
    }

    // Create a new order
    const newOrder = new Order({
      userId,
      name,
      mobileNumber,
      quantity,
      paymentMethod,
      totalPrice,
      deliveryAddress: {
        city,
        area,
        nearbyShop
      }
    });

    // Save the order to the database
    await newOrder.save();

    // Return success response
    res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Error placing order', error: error.message });
  }
};

// Export the controller function
module.exports = {
  placeOrder
};
