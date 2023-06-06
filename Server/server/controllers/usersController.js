//look at dotnev package to hide password etc

const userModel = require('../models/userModel');

/*--------------------------Gets----------------------------------*/


const getUserByEmail = (req, res) => {
    const email = req.params.Email;
    userModel.getUserByEmail(email, (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result);
    });
};

const getAllUser = (req, res) => {
    userModel.getAllUser((error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result);
    });
};


/*-------------------------Create---------------------------------------*/

const createUser = (req, res) => {
    const userData = req.body;
    userModel.createUser(userData, (error, result) => {
        if (error) 
        {
            console.log("Error in createUser", error);
            return res.status(500).json({ error });
        }
        res.json(result);
    });
};


/*-------------------------Updates---------------------------------------*/


const updateUser = (req, res) => 
{
    let email = req.params.email;
    let updatedUserData = req.body;
    userModel.updateUser(email, updatedUserData, (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(result);
    });
};

/*-------------------------Delete---------------------------------------*/

const deleteUser = (req, res) => 
{
    let email = req.params.email;
    userModel.deleteUser(email, (error, result) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(result);
    });
};

/*-------------------------Exports---------------------------------------*/

module.exports = { getUserByEmail, getAllUser, createUser, updateUser, deleteUser };