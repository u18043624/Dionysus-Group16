//look at dotnev package to hide password etc
const wineModel= require('../models/wineModel');

/*--------------------------Gets----------------------------------*/

const getAllWine = (req, res) => {
    wineModel.getAllWine((error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result);
    });
};

const getWineByID = (req, res) => {
    const ID = req.params.Wine_ID;
    wineModel.getWineByID(ID, (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result);
    });
};

/*-------------------------creates---------------------------------------*/

const createWine = (req, res) => {
    const wineData = req.body;
    wineModel.createWine(wineData, (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error: error.message });
        }
        res.json(result);
    });
};


/*-------------------------Updates---------------------------------------*/


const updateWine = (req, res) => 
{
    let Wine_ID = req.params.Wine_ID;
    let updatedWineData = req.body;
    wineModel.updateWine(Wine_ID, updatedWineData, (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(result);
    });
};



/*-------------------------Delete---------------------------------------*/

const deleteWine = (req, res) => 
{
    let Wine_ID = req.params.Wine_ID;
    wineModel.deleteWine(Wine_ID, (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(result);
    });
};


/*-------------------------Exports---------------------------------------*/

module.exports = { getAllWine, getWineByID , createWine , updateWine , deleteWine}