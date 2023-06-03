const reviewsModel = require('../models/reviewModel');

/*--------------------------Gets----------------------------------*/


const getAllReview = (req, res) => {
    reviewsModel.getReviews( (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result);
    });
};


/*-------------------------Posts---------------------------------------*/


const createReview = (req, res) => {
    const reviewData = req.body;
    reviewsModel.createReviews(reviewData, (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error });
        }
        res.json(result);
    });
};


/*-------------------------Exports---------------------------------------*/

module.exports = { getAllReview, createReview};