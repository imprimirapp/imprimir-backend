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
router.post("/empresa/getById",empresaController.getById);
router.post("/empresa/post",empresaController.post);
router.put("/empresa/updateById",empresaController.updateById);
router.delete("/empresa/deleteById",empresaController.deleteById);

module.exports = router;
