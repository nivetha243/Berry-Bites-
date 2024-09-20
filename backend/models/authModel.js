const mongoose = require('mongoose');
const { isEmail } = require('validator'); // Validator for email validation

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Remove leading and trailing whitespace
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: [isEmail, 'Invalid email address'], // Validate email format
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Ensure password is at least 6 characters long
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create the User model from the schema
const Auth = mongoose.model('Auth', userSchema);

module.exports = Auth;
