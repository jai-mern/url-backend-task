// user.service.js
const User = require('../models/user.model');

// Function to create a new user
async function createUser(userData) {
    try {
        const newUser = new User(userData);
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        throw new Error(`Error creating user: ${error.message}`);
    }
}

// Function to get user by ID
async function getUserById(userId) {
    try {
        const user = await User.findById(userId);
        return user;
    } catch (error) {
        throw new Error(`Error fetching user: ${error.message}`);
    }
}

// Function to update user by ID
async function updateUserById(userId, updateData) {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
        return updatedUser;
    } catch (error) {
        throw new Error(`Error updating user: ${error.message}`);
    }
}

// Function to delete user by ID
async function deleteUserById(userId) {
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        return deletedUser;
    } catch (error) {
        throw new Error(`Error deleting user: ${error.message}`);
    }
}

module.exports = { createUser, getUserById, updateUserById, deleteUserById };
