// auth.service.js
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt.config');

// Function to generate JWT token
function generateToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

// Function to verify JWT token
function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

module.exports = { generateToken, verifyToken };
