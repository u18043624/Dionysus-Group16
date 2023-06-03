//look at dotnev package to hide password etc

const userModel = require('../models/userModel');

/*--------------------------Gets----------------------------------*/


const getUserByEmail = (req, res) => {
    const email = req.params.email;
    userModel.getUserByEmail(email, (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result);
    });
};

const getAllUser = (req, res) => {
    wineModel.getAllUser((error, result) => {
        if (error) 
        {
            return res.status(500).json({ error }); //remember to sanitize
        }
        res.json(result);
    });
};


/*-------------------------Posts---------------------------------------*/


const createUser = (req, res) => {
    const userData = req.body;
    userModel.createUser(userData, (error, result) => {
        if (error) 
        {
            return res.status(500).json({ error });
        }
        res.json(result);
    });
};


/*-------------------------Exports---------------------------------------*/

module.exports = { getUserByEmail, getAllUser, createUser};



// module.exports = {
//   getAllUsers: (req, res) => {
//     connection.query('SELECT * FROM users', (error, results) => {
//       if (error) {
//         return res.status(500).json({ error });
//       }
//       res.json(results);
//     });
//   },

//   createUser: (req, res) => {
//     const newUser = req.body;
//     connection.query('INSERT INTO users SET ?', newUser, (error, results) => {
//       if (error) {
//         return res.status(500).json({ error });
//       }
//       res.status(201).json({ insertedId: results.insertId });
//     });
//   },

//   updateUser: (req, res) => {
//     const id = req.params.id;
//     const updatedUser = req.body;
//     connection.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id], (error, results) => {
//       if (error) {
//         return res.status(500).json({ error });
//       }
//       res.json({ message: 'User updated successfully' });
//     });
//   },

//   deleteUser: (req, res) => {
//     const id = req.params.id;
//     connection.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
//       if (error) {
//         return res.status(500).json({ error });
//       }
//       res.json({ message: 'User deleted successfully' });
//     });
//   }
//}