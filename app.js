// Dependencies / Dependencias
const express = require('express');
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logFmt = require('logfmt');
const morgan = require('morgan');
const cons = require('consolidate');

//Port / Puerto:
const server_port = process.env.PORT || 3000;

//App / Aplicación:
const app = express();

//Define static directories / Definir carpetas estáticas a usar:
app.use(express.static(__dirname + '../public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/bower_components'));

//Define view engine / Definir motor de vistas
app.get('/', function(req, res) {
    res.render('index');
});
app.set('views', path.join(__dirname, 'views'));
app.engine('html', cons.swig)
app.set('view engine', 'html');


//Init app / Inicializar la aplicación:
init();

//Define init / Definir Inicialización:
function init() {
  app.listen(server_port, function() {
    console.log('La aplicación está corriendo en localhost:' + server_port);
  });
}

//Export module / Exportar módulo
module.exports = app;