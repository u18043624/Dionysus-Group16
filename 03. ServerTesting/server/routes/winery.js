const express = require('express');
const router = express.Router();
const wineryController = require('../controllers/wineryController');

// Get all wineries
router.get('/', wineryController.getAllWinery);

module.exports = router;
