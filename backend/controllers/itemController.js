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
const getItems = async (req, res) => {
  try {
    const items = await Item.find(); // Fetch all items
    res.status(200).json(items); // Return the items in the response
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc Add new item
// @route POST /api/items
// @access Public
const addItem = async (req, res) => {
  const { name, description, price } = req.body;

  // Validate request data
  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  try {
    const newItem = new Item({
      name,
      description: description || 'No description provided', // Optional field
      price,
    });

    const savedItem = await newItem.save(); // Save the item to the database

    res.status(201).json(savedItem); // Respond with the newly created item
  } catch (error) {
    res.status(500).json({ message: 'Error saving item', error: error.message });
  }
};

module.exports = {
  getItems,
  addItem,
};

