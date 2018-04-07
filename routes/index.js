var express = require('express');
var router = express.Router();

//Home 
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

//Endpoints 


module.exports = router;
