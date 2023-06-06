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
const getOwnerByEmail = (email, cb) => {
    dbConnect.query('SELECT * FROM Owner WHERE Email = ?', [email], (error, results) => {
        if (error) 
        {
            return cb(error, null);
        }
        cb(null, results[0]);
    });
}

const getAllOwner = (cb) => {
    dbConnect.query('SELECT * FROM Owner',(error, results) => 
    {
        if (error) 
        {
            return cb(error, null);
        }
        cb(null, results);
    });
}

//exports function
module.exports = {getOwnerByEmail, getAllOwner};