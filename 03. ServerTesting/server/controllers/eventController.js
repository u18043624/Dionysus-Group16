const eventModel = require('../models/eventModel');

/*--------------------------Gets----------------------------------*/


const getAllEvent = (req, res) => {

    eventModel.getAllEvent( (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result);
    });
};


/*-------------------------Posts---------------------------------------*/


const createEvent = (req, res) => {
    const userData = req.body;
    eventModel.createEvent(userData, (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error });
        }
        res.json(result);
    });
};


/*-------------------------Exports---------------------------------------*/

module.exports = { getAllEvent, createEvent};