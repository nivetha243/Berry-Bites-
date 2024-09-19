// // routes/itemRoutes.js

// const express = require('express');
// const router = express.Router();
// const { getItems, addItem } = require('../controllers/itemController');

// // Route to get all items
// router.get('/', getItems);

// // Route to add a new item
// router.post('/', addItem);

// module.exports = router;
const express = require('express');
const router = express.Router();
const { getItems, addItem } = require('../controllers/itemController');

router.get('/', getItems); // GET /api/items
router.post('/', addItem); // POST /api/items

module.exports = router;

