require('./api/data/dbconnection.js');
var express = require('express');
var app = express();

var routes = require('./api/routes');

app.set('port',3000);

app.use(function(req, res, next){
    console.log(req.method , req.url);
    next();
});

app.get('', function(req,res){
    res
        .status(200)
        .send('Hello world!');
});

app.use('/api', routes);

var server = app.listen(app.get('port'),function(){
    var port = server.address().port;
});
