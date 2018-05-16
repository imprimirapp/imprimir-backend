const express = require('express');
const router = express.Router();
//Controllers
const empresaController = require('../controllers/empresaController');
const userController = require('../controllers/userController');
const storageController = require('../controllers/storageController');


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
router.get("/user/getUser", userController.getUser);
router.post("/user/signup", userController.signup, userController.verifyEmail);
router.post("/user/login", userController.login, userController.getUser);
router.post("/user/logout", userController.logout);
router.post("/user/recoverPass", userController.recoverPass);
router.put("/user/updateUser", userController.updateUser);
router.delete("/user/deleteUser", userController.deleteUser);

//Storage
router.post("/storage/uploadFile", storageController.uploadFile);
router.post("/storage/downloadFile", storageController.downloadFile);
router.delete("/storage/deleteFile", storageController.deleteFile);

module.exports = router;
