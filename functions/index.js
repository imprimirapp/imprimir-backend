const functions = require('firebase-functions');
const cors = require('cors');
const path = require('path');
const cons = require('consolidate');
// Dependencies 
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var routes = require('./routes/index.js');

//App 
const app = express();

//Define view engine 
app.set('views', path.join(__dirname, '../views'));
app.engine('html', cons.swig)
app.set('view engine', 'html');

//Define static directories
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/bower_components'));

//Define middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//CORS
app.use(cors({ origin: true }));

//Routes (Use all endpoints)
app.use('/', routes);


//Export functions
exports.fun = functions.https.onRequest(app);