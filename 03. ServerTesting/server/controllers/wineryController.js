const wineryModel = require('../models/wineryModel');

/*--------------------------Gets----------------------------------*/


const getAllWinery = (req, res) => {
    
    wineryModel.getAllWinery( (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result); 
    });
};


/*-------------------------Exports---------------------------------------*/

module.exports = { getAllWinery};
