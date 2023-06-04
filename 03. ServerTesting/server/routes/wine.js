const express = require('express');
const router = express.Router();
const wineController = require('../controllers/wineController');

//get all wines
router.get('/', wineController.getAllWine);

router.get('/:Wine_ID', wineController.getWineByID);

module.exports = router;