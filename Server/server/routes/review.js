const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Get all the reviews
router.get('/', reviewController.getAllReview);

router.get('/:Review_ID', reviewController.getReviewByID);

//create reviews
router.post('/', reviewController.createReview);

module.exports = router;

