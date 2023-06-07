//look at dotnev package to hide password etc
const customerModel= require('../models/customerModel');

/*--------------------------Gets----------------------------------*/

const getAllCustomer = (req, res) => {
    customerModel.getAllCustomer((error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result);
    });
};

const getCustomerByEmail = (req, res) => {
    const email = req.params.Email;
    customerModel.getCustomerByEmail(email, (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result);
    });
};

const createCustomer = (req, res) => {
    const customerData = req.body;
    customerModel.createCustomer(customerData, (error, result) => {
        if (error) 
        {
            console.log("Error in createCustomer", error);
            return res.status(500).json({ error });
        }
        res.json(result);
    });
};

module.exports = { getAllCustomer, getCustomerByEmail, createCustomer}