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


///////crud for the wine 

const createWine = (wineData, cb) => 
{
    // First check if the Wine ID already exists
    dbConnect.query('SELECT * FROM Wine WHERE Wine_ID = ?', [wineData.Wine_ID], (error, results) => {
        if (error) {
            return cb(error);
        }

        if (results.length > 0) {
            return cb(new Error('Wine ID already exists'));
        } 

        // If the Wine ID doesn't exist, proceed with creating the entry
        dbConnect.query('INSERT INTO Wine SET ?', wineData, (error, results) => {
            if (error) {
                return cb(error);
            }
            cb(null, results);
        });
    });
};


const deleteWine = (Wine_ID, cb) => {
    const sql = 'DELETE FROM Wine WHERE Wine_ID = ?';
    dbConnect.query(sql, [Wine_ID], (error, results) => {
        if (error) {
            return cb(error);
        }
        cb(null, results);
    });
};

const updateWine = (Wine_ID, wineData, cb) => {
    const sql = `UPDATE Wine SET ? WHERE Wine_ID = ?`;
    dbConnect.query(sql, [wineData, Wine_ID], (error, results) => {
        if (error) {
            return cb(error);
        }
        cb(null, results);
    });
};





//exports function
module.exports = {getAllWine, getWineByID , deleteWine ,updateWine ,updateWine,createWine};