// const express = require('express');
// const router = express.Router();
// const { register, login, deleteAccount } = require('../controllers/authController');
// const authMiddleware = require('../middleware/authMiddleware'); // Middleware to check auth

// // Register and login routes
// router.post('/register', register);
// router.post('/login', login);

// // Delete account route (protected)
// router.delete('/delete', authMiddleware, deleteAccount);

// module.exports = router;
// authRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { register, login, logout, deleteAccount, getProfile } = require('../controllers/authController');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/profile', authMiddleware, getProfile); // Protected profile route
// Fetch profile
router.delete('/delete', authMiddleware, deleteAccount);

module.exports = router;

