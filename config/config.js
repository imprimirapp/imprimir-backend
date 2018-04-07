process.env.NODE_ENV="development"; // Change this var with your environment running / Cambiar esta variable con el entorno a ejecutar.
module.exports = require('./env/' + process.env.NODE_ENV + '.js');
