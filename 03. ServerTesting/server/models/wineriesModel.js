
const mysql = require('mysql');

const dbConnect = mysql.createConnection({
  host: 'wheatley.cs.up.ac.za',
  user: 'u21434965',
  password: 'Y6F2PAJFPO2FXZ2OKT6XSIUPUGSBMWVP',
  database: 'u21434965_dionysus'
});



//return all the wineries 
const AllWineries = (cb) => {
    dbConnect.query('SELECT * FROM Winery', (error, results) => {
      if (error) {
        return cb(error, null);
      }
      cb(null, results);
    });
  };
  
  //get wineries based on the  on a cernain factor or one condition e.g search or get by id for the user and owner
const getWineries = (columnName, columnValue, cb) => {
    dbConnect.query(`SELECT * FROM Winery WHERE ${columnName} = ?`, [columnValue], (error, results) => {
        if (error) {
            return cb(error, null);
        }
        cb(null, results);
    });
};

const  filterWineries= (conditions, cb) => {
    let query = 'SELECT * FROM Winery WHERE ';
    const values = [];
  
    conditions.forEach((condition, index) => {
      const { columnName, operator, columnValue } = condition;
      query += `${columnName} ${operator} ?`;
      values.push(columnValue);
  
      if (index !== conditions.length - 1) {
        query += ' AND ';
      }
    });
  
    dbConnect.query(query, values, (error, results) => {
      if (error) {
        return cb(error, null);
      }
      cb(null, results);
    });
  };
  


//exports function
module.exports = {filterWineries ,getWineries,AllWineries};