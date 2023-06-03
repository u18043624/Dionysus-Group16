const express = require('express');
const router = express.Router();
const usersController = require('../controllers/reviewsController');

// Get all the reviews
router.get('/', reviewsController.getReview);


//create reviews
router.post('/', reviewsController.createReview);
module.exports = router;

