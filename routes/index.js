const express = require('express');
const router = express.Router();


//Home 
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});


module.exports = router;
