const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Get a single user using id
router.get('/:id', usersController.getUser);

// Get all users
//router.get('/', usersController.getUsers);

//create user
router.post('/', usersController.createUser);

// Update user
//router.put('/:id', usersController.updateUser);

// Delete user
//router.delete('/:id', usersController.deleteUser);

module.exports = router;
