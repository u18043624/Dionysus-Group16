const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');





// Get a all events using id
router.get('/', eventsController.getEvents);

//create events
router.post('/', eventsController.createEvents);



module.exports = router;



///////still need to come back and modify this code