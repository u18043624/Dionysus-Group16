const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Get a single customer using email
router.get('/:Email', customerController.getCustomerByEmail);

// Get all customer
router.get('/', customerController.getAllCustomer);

//create customer
router.post('/', customerController.createCustomer);

module.exports = router;