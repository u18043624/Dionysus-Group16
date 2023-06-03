const wineriesModel = require('../models/wineriesModel');

/*--------------------------Gets----------------------------------*/


const getAllWineries = (req, res) => {
    
    wineriesModel.AllWineries( (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result);
    });
};



/*-------------------------Exports---------------------------------------*/

module.exports = { getAllWineries};


