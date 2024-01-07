// Example index.js content
const express = require('express');
const router = express.Router();

// Import other route modules
const userRoutes = require('../routes/api/userRoutes');
const thoughtRoutes = require('../routes/api/thoughtRoutes');

// Use the imported routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
