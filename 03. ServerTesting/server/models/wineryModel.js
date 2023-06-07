
const mysql = require('mysql');

const dbConnect = mysql.createConnection({
  host: 'wheatley.cs.up.ac.za',
  user: 'u21434965',
  password: 'Y6F2PAJFPO2FXZ2OKT6XSIUPUGSBMWVP',
  database: 'u21434965_dionysus'
});



//return all the winery's 
const getAllWinery = (cb) => {
    dbConnect.query('SELECT * FROM Winery', (error, results) => {
      if (error) {
        return cb(error, null);
      }
      cb(null, results);
    });
};

const getWineryByID = (ID, cb) => {
  dbConnect.query('SELECT * FROM Winery WHERE Winery_ID = ?', [ID], (error, results) => {
      if (error) 
      {
          return cb(error, null);
      }
      cb(null, results[0]);
  });
}





//exports function
module.exports = {getAllWinery, getWineryByID};