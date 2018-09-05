//BASIC SERVER FOR INITIAL VIEW. DON'T INIT FROM HERE.

// Dependencies 
const express = require('express');
const path = require('path');
const cons = require('consolidate');
var routes = require('./routes/index.js');

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

//Routes
app.use('/', routes);

//Export module 
module.exports = app;