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

//using transaction so that user then customer can be added asynchronous JS causes issues
const createUser = (userData, cb) => {
    dbConnect.beginTransaction(function(err)  
    {
        if (err) { 
            return cb(err); 
        }

        dbConnect.query('INSERT INTO Users SET ?', userData, function (error, results, fields) {
            if (error) {
                return dbConnect.rollback(function() {
                    cb(error);
                });
            }

            var customerData = {
                Email: userData.Email,
                Can_Manage: "N"
            };

            dbConnect.query('INSERT INTO Customer SET ?', customerData, function (error, results, fields) {
                if (error) {
                    return dbConnect.rollback(function() {
                        cb(error);
                    });
                }
                dbConnect.commit(function(err) {
                    if (err) {
                        return dbConnect.rollback(function() {
                            cb(err);
                        });
                    }
                    cb(null, results);
                });
            });
        });
    });
};

const deleteUser = (email, cb) => {
    const sql = 'DELETE FROM Users WHERE Email = ?';
    dbConnect.query(sql, [email], (error, results) => {
        if (error) {
            return cb(error);
        }
        cb(null, results);
    });
};

const updateUser = (email, userData, cb) => {
    const sql = `UPDATE Users SET ? WHERE Email = ?`;
    dbConnect.query(sql, [userData, email], (error, results) => {
        if (error) {
            return cb(error);
        }
        cb(null, results);
    });
};

//exports function
module.exports = {getUserByEmail, getAllUser, createUser, updateUser, deleteUser};