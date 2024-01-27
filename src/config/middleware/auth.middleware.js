// auth.middleware.js
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt.config');

// Middleware function to verify JWT token from request headers
const verifyToken = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach decoded user information to the request object
    next(); // Move to the next middleware or route handler
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = {
  verifyToken,
};
