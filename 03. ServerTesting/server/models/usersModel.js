//look at dotnev package to hide password etc
//ask about closing connection

const mysql = require('mysql');

const dbConnect = mysql.createConnection({
  host: 'wheatley.cs.up.ac.za',
  user: 'u21434965',
  password: 'Y6F2PAJFPO2FXZ2OKT6XSIUPUGSBMWVP',
  database: 'u21434965_dionysus'
});

// cb short for callback
const getUsersById = (id, cb) => {
    dbConnect.query('SELECT * FROM Users WHERE user_ID = ?', [id], (error, results) => {
        if (error) 
        {
            return cb(error, null);
        }
        cb(null, results[0]);
    });
}

const createUser = (userData, cb) => {
    dbConnect.query('INSERT INTO Users SET ?', userData, (error, results) => {
        if (error) 
        {
            return cb(error);
        }
        cb(null, results);
    });
};

//exports function
module.exports = {getUsersById, createUser};