const express = require('express');
const router = express.Router();
const ownerController = require('../controllers/ownerController');

// Get a single owner using email
router.get('/:Email', ownerController.getOwnerByEmail);

// Get all owner
router.get('/', ownerController.getAllOwner);

module.exports = router;