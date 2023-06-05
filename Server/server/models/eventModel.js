const mysql = require('mysql');

const dbConnect = mysql.createConnection(
{
  host: 'wheatley.cs.up.ac.za',
  user: 'u21434965',
  password: 'Y6F2PAJFPO2FXZ2OKT6XSIUPUGSBMWVP',
  database: 'u21434965_dionysus'
});


const getAllEvent = (cb) => {
    dbConnect.query('SELECT * FROM Events', (error, results) => {
      if (error) {
        return cb(error, null);
      }
      cb(null, results);
    });
  };
  const createEvent = (eventData, cb) => {
    dbConnect.query('INSERT INTO Events SET ?', eventData, (error, results) => {
        if (error) 
        {
            return cb(error);
        }
        cb(null, results);
    });
};

  module.exports = {createEvent, getAllEvent};