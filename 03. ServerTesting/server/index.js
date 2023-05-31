const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const usersController = require('./controllers/usersController');
const cors = require('cors');
//const winesRoutes = require('./routes/products');

app.use(express.json());

/* ----------cors implementation-----------------------------------------------*/

app.use(cors());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

/* ---------- user fetches ---------------------------------------------------- */

app.use('/users', usersRoutes);
//app.get('/users/:id', usersController.getUser);
//app.get('/users', usersController.getAllUsers);
// app.post('/users', usersController.createUser);
// app.put('/users/:id', usersController.updateUser);
// app.delete('/users/:id', usersController.deleteUser);
//app.use('/api/wines', productsRoutes);

/* --------------------------------------------------------------------------- */

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`server running on port ${PORT} ...`));