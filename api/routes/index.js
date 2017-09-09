var express = require('express');
var router = express.Router();

var ctrlSandwiches = require('../controllers/sandwiches.controllers.js');

router
    .route('/sandwiches')
    .get(ctrlSandwiches.sandwichesGetAll);

router
    .route('/sandwiches/:sandwichId')
    .get(ctrlSandwiches.sandwichesGetOne);

module.exports = router;