//look at dotnev package to hide password etc
//ask about closing connection

const mysql = require('mysql');

const dbConnect = mysql.createConnection({
  host: 'wheatley.cs.up.ac.za',
  user: 'u21434965',
  password: 'Y6F2PAJFPO2FXZ2OKT6XSIUPUGSBMWVP',
  database: 'u21434965_dionysus'
});

//note email is being used as email
// cb short for callback
const getCustomerByEmail = (email, cb) => 
{
    dbConnect.query('SELECT * FROM Customer WHERE Email = ?', [email], (error, results) => 
    {
        if (error) 
        {
            return cb(error, null);
        }
        cb(null, results[0]);
    });
}

const getAllCustomer = (cb) => {
    dbConnect.query('SELECT * FROM Customer',(error, results) => 
    {
        if (error) 
        {
            return cb(error, null);
        }
        cb(null, results);
    });
}

const createCustomer = (customerData, cb) => 
{
    dbConnect.query('INSERT INTO Customer SET ?', customerData, (error, results) => {
        if (error) {
            return cb(error);
        }
        cb(null, 'CustomerCreated successfully');
    });
}

//exports function
module.exports = {getCustomerByEmail, getAllCustomer, createCustomer};