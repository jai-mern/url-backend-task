const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./src/config/jwt.config');

// Create an Express application
const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import controllers
const authController = require('./src/controllers/auth.controller');
const userController = require('./src/controllers/user.controller');

// Import middleware
const authMiddleware = require('./src/middleware/auth.middleware');

// Define routes
const authRoutes = require('./src/routes/auth.routes');
const userRoutes = require('./src/routes/user.routes');

// Middleware setup
app.use(express.json()); // Parse JSON request bodies
app.use(authMiddleware); // Apply authentication middleware

// Route setup
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to your backend application!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
