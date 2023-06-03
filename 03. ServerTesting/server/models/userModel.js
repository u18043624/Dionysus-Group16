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
const getUserByEmail = (email, cb) => {
    dbConnect.query('SELECT * FROM Users WHERE Email = ?', [email], (error, results) => {
        if (error) 
        {
            return cb(error, null);
        }
        cb(null, results[0]);
    });
}

const getAllUser = (cb) => {
    dbConnect.query('SELECT * FROM Users',(error, results) => 
    {
        if (error) 
        {
            return cb(error, null);
        }
        cb(null, results);
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

// const createUser = (userData, cb) => {
//     dbConnect.query('INSERT INTO user_ID, username, first_name INTO Users SET ?,?,?', userData, (error, results) => {
//         if (error) 
//         {
//             return cb(error);
//         }
//         cb(null, results);
//     });
// };

// const updateUser = (userData, cb) => {
//     dbConnect.query(`INSERT INTO user_ID, username, first_name INTO Users SET ?,?,?', user
//     if (error)
//     {

//     }
//     cb(null, results);
// }

//exports function
module.exports = {getUserByEmail, getAllUser, createUser};