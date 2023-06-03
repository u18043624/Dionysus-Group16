const express = require('express');
const router = express.Router();
const wineController = require('../controllers/wineController');

//get all wines
router.get('/', wineController.getAllWine);

module.exports = router;