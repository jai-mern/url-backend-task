// user.routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Define routes for user management
router.get('/', authMiddleware.authenticate, userController.getAllUsers);
router.get('/:id', authMiddleware.authenticate, userController.getUserById);
router.post('/', authMiddleware.authenticate, userController.createUser);
router.put('/:id', authMiddleware.authenticate, userController.updateUserById);
router.delete('/:id', authMiddleware.authenticate, userController.deleteUserById);

module.exports = router;
