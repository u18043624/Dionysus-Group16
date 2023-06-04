//look at dotnev package to hide password etc
//ask about closing connection

const mysql = require('mysql');

const dbConnect = mysql.createConnection({
  host: 'wheatley.cs.up.ac.za',
  user: 'u21434965',
  password: 'Y6F2PAJFPO2FXZ2OKT6XSIUPUGSBMWVP',
  database: 'u21434965_dionysus'
});

//gets

const getAllWine = (cb) => {
    dbConnect.query('SELECT * FROM Wine',(error, results) => 
    {
        if (error) 
        {
            return cb(error, null);
        }
        cb(null, results);
    });
}

const getWineByID = (ID, cb) => {
    dbConnect.query('SELECT * FROM Wine WHERE Wine_ID = ?', [ID], (error, results) => {
        if (error) 
        {
            return cb(error, null);
        }
        cb(null, results[0]);
    });
}

//post

//exports function
module.exports = {getAllWine, getWineByID};