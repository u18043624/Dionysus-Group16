const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Get a single user using email
router.get('/:Email', usersController.getUserByEmail);

// Get all users
router.get('/', usersController.getAllUser);

//create user
router.post('/', usersController.createUser);

// Update user
router.put('/:email', usersController.updateUser);

//Delete user
router.delete('/:email', usersController.deleteUser);

module.exports = router;