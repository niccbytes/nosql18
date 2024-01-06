// routes/apiRoutes.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('User');

// Define routes
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Other routes for creating, updating, and deleting users
// ...

module.exports = router;
