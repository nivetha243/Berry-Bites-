const express = require('express');
const router = express.Router();
const { register, login, deleteAccount } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware to check auth

// Register and login routes
router.post('/register', register);
router.post('/login', login);

// Delete account route (protected)
router.delete('/delete', authMiddleware, deleteAccount);

module.exports = router;
