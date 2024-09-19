// require('dotenv').config(); // Ensure this is at the top to load environment variables
// const express = require('express');
// const connectDB = require('./config/db'); // Ensure this path is correct

// const app = express();

// // Middleware to parse JSON
// app.use(express.json());

// // Connect to MongoDB
// connectDB();

// // Example route to test the server
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// // Import routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/items', require('./routes/itemRoutes'));

// // Set up server port
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Path to your db.js

const app = express();

// Print JWT_SECRET to debug
console.log("JWT_SECRET:", process.env.JWT_SECRET);

// Middleware
app.use(express.json());
app.use(cors());

// Connect to DB
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth')); // Route definitions
app.use('/api/items', require('./routes/itemRoutes')); // Other routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


