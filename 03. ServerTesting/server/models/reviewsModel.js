const mysql = require('mysql');

const dbConnect = mysql.createConnection({
  host: 'wheatley.cs.up.ac.za',
  user: 'u21434965',
  password: 'Y6F2PAJFPO2FXZ2OKT6XSIUPUGSBMWVP',
  database: 'u21434965_dionysus'
});

// cb short for callback

//return all the reviws data
const getReviews = (cb) => {
    dbConnect.query('SELECT * FROM Reviews', (error, results) => {
      if (error) {
        return cb(error, null);
      }
      cb(null, results);
    });
  };
  
  //pass the 
const createReviews = (reviewData, cb) => {
    dbConnect.query('INSERT INTO Reviews SET ?', reviewData, (error, results) => {
        if (error) 
        {
            return cb(error);
        }
        cb(null, results);
    });
};

//exports function
module.exports = {getReviews, createReviews};