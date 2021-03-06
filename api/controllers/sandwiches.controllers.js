var mongoose = require('mongoose');
var Sandwiches = mongoose.model('Sandwiches');

module.exports.sandwichesGetAll = function(req, res){

    var origin = "";
    var count = 7;

    if(req.query && req.query.origin){
        origin = req.query.origin;
    }

    if(req.query && req.query.count){
        count = req.query.count;
    }

    if(origin === ""){
        Sandwiches
        .find()
        .limit(count)
        .exec(function(err,sandwiches){
            if(err){
                console.log("Error finding hotels");
                res
                    .status(500)
                    .json(err);
            }else{
                console.log("Found sandwiches");
                res
                    .json(sandwiches);
            }
        })
    }else{
        Sandwiches
            .where('origin').in(origin)
            .exec(function(err,sandwiches){
                console.log("Found sandwiches");
                res
                    .json(sandwiches);
            });
    }
};

module.exports.sandwichesGetOne = function(req, res){
    var sandwichId = req.params.sandwichId;

    Sandwiches
        .findById(sandwichId)
        .exec(function(err, sandwich){
            res
                .status(200)
                .json(sandwich);
        })
}
