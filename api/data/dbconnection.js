var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/meanSandwiches';

mongoose.connect(dburl);

mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to ' + dburl);
});
mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});
mongoose.connection.on('error', function(err){
    console.log('Mongoose connected error ' + err);
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected trough app termination (SIGINT) ')
        process.exit(0);
    });
});

process.on('SIGTERM', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected trough app termination (SIGTERM) ')
        process.exit(0);
    });
});

process.once('SIGUSR2', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected trough app termination (SIGUSR2) ')
        process.exit(process.pid, 'SIGUSR2');
    });
});

require('./sandwiches.model.js');