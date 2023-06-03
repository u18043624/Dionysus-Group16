const express = require('express');
const router = express.Router();
const wineriesController = require('../controllers/wineriesController');

// Get all wineries
router.get('/', wineriesController.getAllWineries);

module.exports = router;
