const express = require('express');
const router = express.Router();
//Controllers
const empresaController = require('../controllers/empresaController');
const userController = require('../controllers/userController');

//Home 
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

//Endpoints 

//Empresa
router.get("/empresa/getAll",empresaController.getAll);
router.post("/empresa/getById",empresaController.getById);
router.post("/empresa/post",empresaController.post);
router.put("/empresa/updateById",empresaController.updateById);
router.delete("/empresa/deleteById",empresaController.deleteById);

//User
router.post("/user/signup", userController.signup); //, userController.verifyEmail (Coming soon)
router.post("/user/login", userController.login, userController.getUser);
router.post("/user/logout", userController.logout);
router.post("/user/getById", userController.getById);

module.exports = router;
