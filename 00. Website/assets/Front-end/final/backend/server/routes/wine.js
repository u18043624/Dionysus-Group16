const express = require('express');
const router = express.Router();
const wineController = require('../controllers/wineController');

//get all wines
router.get('/', wineController.getAllWine);

router.get('/:Wine_ID', wineController.getWineByID);

//create wine
router.post('/', wineController.createWine);

// Update wine
router.put('/:Wine_ID', wineController.updateWine);

//Delete wine
router.delete('/:Wine_ID', wineController.deleteWine);

module.exports = router;