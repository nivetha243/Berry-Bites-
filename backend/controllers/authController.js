
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Auth = require('../models/authModel');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Register user
// Register user
const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Auth({ name, email, password: hashedPassword });
    await newUser.save();

    // Generate token after registration
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '1h' });

    // Return success message with token and user data
    res.status(201).json({
      message: 'User registered successfully',
      token, // Send the token to the client
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Login user
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Auth.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete account
const deleteAccount = async (req, res) => {
  try {
    const userId = req.user.userId;
    await Auth.findByIdAndDelete(userId);
    res.status(200).json({ message: 'Account deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get profile
const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await Auth.findById(userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { register, login, deleteAccount, getProfile };






