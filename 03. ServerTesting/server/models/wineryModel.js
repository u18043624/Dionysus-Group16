
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
  
  //get wineries based on the  on a cernain factor or one condition e.g search or get by id for the user and owner




//exports function
module.exports = {getAllWinery};