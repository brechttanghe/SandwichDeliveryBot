var mongoose = require('mongoose');

var sandwichSchema = new mongoose.Schema({
    description : String,
    origin : String,
    name : String
});

mongoose.model('Sandwiches', sandwichSchema);