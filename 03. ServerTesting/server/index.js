const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//routes
const usersRoutes = require('./routes/users');
const wineRoutes = require('./routes/wine');
const wineryRoutes = require('./routes/winery');
const reviewRoutes = require('./routes/review');
const eventRoutes = require('./routes/event');

/* ----------module implementation-----------------------------------------------*/

app.use(express.json());
app.use(cors());

/* ---------- user uses ---------------------------------------------------- */

app.use('/users', usersRoutes);

//app.get('/users/:id', usersController.getUser);
//app.get('/users', usersController.getAllUsers);
// app.post('/users', usersController.createUser);
// app.put('/users/:id', usersController.updateUser);
// app.delete('/users/:id', usersController.deleteUser);
//app.use('/api/wines', productsRoutes);

/* ---------- wine uses ---------------------------------------------------- */

app.use('/wine', wineRoutes);

/* ---------- winery fetches ---------------------------------------------------- */

app.use('/winery', wineryRoutes);

/* ---------- review fetches ---------------------------------------------------- */

app.use('/review', reviewRoutes);

/* ---------- event fetches ---------------------------------------------------- */

app.use('/events', eventRoutes);

/* --------------------------------------------------------------------------- */



const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`server running on port ${PORT} ...`));