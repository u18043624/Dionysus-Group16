const reviewModel = require('../models/reviewModel');

/*--------------------------Gets----------------------------------*/


const getAllReview = (req, res) => {
    reviewModel.getAllReview( (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result);
    });
};

const getReviewByID = (req, res) => {
    const ID = req.params.Review_ID;
    reviewModel.getReviewByID(ID, (error, result) => {
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
    reviewModel.createReview(reviewData, (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error });
        }
        res.json(result);
    });
};


/*-------------------------Exports---------------------------------------*/

module.exports = { getAllReview, createReview, getReviewByID};