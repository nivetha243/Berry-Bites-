// const mongoose = require('mongoose');

// const itemSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   stock: {
//     type: Number,
//     required: true,
//     default: 0,
//   },
// });

// module.exports = mongoose.model('Item', itemSchema);
// models/Item.js

const mongoose = require('mongoose');

// Define the schema for an Item
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
}, {
  timestamps: true, // Automatically create 'createdAt' and 'updatedAt' fields
});

// Create the Item model based on the schema
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
