var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var config = require('./app/config/config');

app.use(morgan('dev'));                                         
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());

mongoose.connect(config.db);
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + config.db);
});
app.listen(config.port, function(err){
  if(err) throw err;
  console.log("App listening on port "+config.port);
});