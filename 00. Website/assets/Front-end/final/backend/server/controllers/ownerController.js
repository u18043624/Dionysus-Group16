const ownerModel= require('../models/ownerModel');

/*--------------------------Gets----------------------------------*/

const getAllOwner = (req, res) => {
    ownerModel.getAllOwner((error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result);
    });
};

const getOwnerByEmail = (req, res) => {
    const email = req.params.Email;
    ownerModel.getOwnerByEmail(email, (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result);
    });
};

module.exports = { getAllOwner, getOwnerByEmail}