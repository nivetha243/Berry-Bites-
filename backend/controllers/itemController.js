// // controllers/itemController.js

// const Item = require('../models/Item');

// // @desc Get all items
// // @route GET /api/items
// // @access Public
// const getItems = async (req, res) => {
//   try {
//     const items = await Item.find();
//     res.json(items);
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // @desc Add new item
// // @route POST /api/items
// // @access Public
// const addItem = async (req, res) => {
//   const { name, description, price } = req.body;
//   try {
//     const newItem = new Item({
//       name,
//       description,
//       price,
//     });
//     const savedItem = await newItem.save();
//     res.json(savedItem);
//   } catch (error) {
//     res.status(400).json({ message: 'Error saving item' });
//   }
// };

// module.exports = {
//   getItems,
//   addItem,
// };
const Item = require('../models/Item');

// @desc Get all items
// @route GET /api/items
// @access Public

// Place a new order
const placeOrder = async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Log the request body

    const {
      userId,
      name,
      mobileNumber,
      city,
      area,
      nearbyShop,
      quantity,
      paymentMethod,
      cardDetails,
      totalPrice
    } = req.body;

    // Ensure required fields are present
    if (!userId || !city || !area) {
      return res.status(400).json({ message: 'Required fields are missing.' });
    }

    // Create a new order
    const newOrder = new Order({
      user: userId,  // userId should match the user
      name,
      mobileNumber,
      deliveryAddress: { city, area, nearbyShop },
      quantity,
      paymentMethod,
      cardDetails: paymentMethod === 'online-payment' ? cardDetails : null,
      totalPrice
    });

    // Save the order
    const savedOrder = await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully!', order: savedOrder });
  } catch (error) {
    console.error('Error placing order:', error); // Log the error
    res.status(500).json({ message: 'Error placing order', error: error.message });
  }
};


// Export the controller function
module.exports = {
  placeOrder
};
