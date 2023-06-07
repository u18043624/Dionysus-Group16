const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Get a all events
router.get('/', eventController.getAllEvent);

//create events
router.post('/', eventController.createEvent);


module.exports = router;



///////still need to come back and modify this code