const express = require('express');
const router = express.Router();
//Controllers
const empresaController = require('../controllers/empresaController')

//Home 
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

//Endpoints 
router.get("/empresa/getAll",empresaController.getAll);

module.exports = router;
