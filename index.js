// index.js

const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/your-database', { useNewUrlParser: true, useUnifiedTopology: true });

require('./models/User');
// Require other models
// ...

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// index.js

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });

  // index.js

mongoose.connect('mongodb://localhost:27017/your-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Other options
  });

  // index.js

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB connection closed due to app termination');
      process.exit(0);
    });
  });
  
  
  