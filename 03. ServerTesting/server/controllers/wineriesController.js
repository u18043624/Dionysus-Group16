const wineriesModel = require('../models/wineriesModel');

/*--------------------------Gets----------------------------------*/


const getAllWineries = (req, res) => {
    
    wineriesModel.AllWineries( (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result);
    });
};




const search = (req, res) => {
    const { columnName, columnValue } = req.body;
  
    wineriesModel.getWineries(columnName, columnValue, (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.json(results);
    });
  };

  const filter = (req, res) => {
    const { columnName, columnValue } = req.body;
    const conditions = [{ columnName, operator: '=', columnValue }];
  
    wineriesModel.filterWineries(conditions, (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.json(results);
    });
  };
  


/*-------------------------Exports---------------------------------------*/

module.exports = { getAllWineries, search ,filter};


