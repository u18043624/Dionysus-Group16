const AllEvents = (cb) => {
    dbConnect.query('SELECT * FROM Events', (error, results) => {
      if (error) {
        return cb(error, null);
      }
      cb(null, results);
    });
  };

  const  filterEvents= (conditions, cb) => {
    let query = 'SELECT * FROM Events WHERE ';
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

  module.exports = {filterEvents ,AllEvents};