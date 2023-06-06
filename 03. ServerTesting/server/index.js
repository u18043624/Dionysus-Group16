const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

//routes
const usersRoutes = require('./routes/users');
const customerRoutes = require('./routes/customer');
const ownerRoutes = require('./routes/owner');
const wineRoutes = require('./routes/wine');
const wineryRoutes = require('./routes/winery');
const reviewRoutes = require('./routes/review');
const eventRoutes = require('./routes/event');

/* ----------module implementation-----------------------------------------------*/

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*', //can  just to be just url of actual site
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

//Opens Login Page (front Page)

app.use(express.static(path.join(__dirname, '../../00. Website/assets')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../00. Website/assets/login.html'));
});

/* ---------- user uses ---------------------------------------------------- */

app.use('/users', usersRoutes);

/* ---------- owner fetches ---------------------------------------------------- */

app.use('/owner', ownerRoutes);

/* ---------- customer fetches ---------------------------------------------------- */

app.use('/customer', customerRoutes);

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
app.listen(PORT, async () => {
  console.log(`server running on port ${PORT} ...`);

  // Opens the url in the default browser
  const open = await import('open');
  open.default(`http://localhost:${PORT}`);
});