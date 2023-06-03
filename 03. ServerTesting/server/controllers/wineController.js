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

/*-------------------------Posts---------------------------------------*/


// const createUser = (req, res) => {
//     const userData = req.body;
//     userModel.createUser(userData, (error, result) => {
//         if (error) 
//         {
//             return res.status(500).json({ error });
//         }
//         res.json(result);
//     });
// };


/*-------------------------Exports---------------------------------------*/

module.exports = { getAllWine}