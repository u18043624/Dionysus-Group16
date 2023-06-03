const eventsModel = require('../models/eventsModel');

/*--------------------------Gets----------------------------------*/


const getEvents = (req, res) => {

    eventsModel.AllEvents( (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result);
    });
};


/*-------------------------Posts---------------------------------------*/


const createEvents = (req, res) => {
    const userData = req.body;
    eventsModel.createEvent(userData, (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error });
        }
        res.json(result);
    });
};


/*-------------------------Exports---------------------------------------*/

module.exports = { getEvents, createEvents};