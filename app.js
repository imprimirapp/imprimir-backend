// Dependencies 
const express = require('express');
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logFmt = require('logfmt');
const morgan = require('morgan');
const cons = require('consolidate');
var routes = require('./routes/index.js');
const config  = require('./config/config');

const connection = require('./models/connection');
const db = connection.db();

//Port
const server_port = config.port;

//App 
const app = express();

//Define static directories
app.use(express.static(__dirname + '../public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/bower_components'));

//Define view engine 
app.set('views', path.join(__dirname, 'views'));
app.engine('html', cons.swig)
app.set('view engine', 'html');

//Define middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//CORS
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

//Routes
app.use('/', routes);

//Init app 
init();

//Define init 
function init() {
  app.listen(server_port, function() {
    console.log('APP: localhost:' + server_port);
    console.log('DB:', db.projectId);
  });
}

//Export module 
module.exports = app;