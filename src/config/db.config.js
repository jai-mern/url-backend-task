// db.config.js
const mongoose = require('mongoose');

// Database connection URI
const DB_URI = process.env.DB_URI;

// Connect to MongoDB
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

module.exports = mongoose.connection;
