process.env.NODE_ENV="development"; // Change this var with your environment running 
module.exports = require('./env/' + process.env.NODE_ENV + '.js');
