const express = require('express');
const router = express.Router();
//Controllers
const empresaController = require('../controllers/empresaController');
const agenteController = require('../controllers/agenteController');
const freelanceController = require('../controllers/freelanceController');
const membresiaController = require('../controllers/membresiaController');
const plataformaController = require('../controllers/plataformaController');
const productoController = require('../controllers/productoController');
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

//Agente
router.get("/agente/getAll",agenteController.getAll);
router.post("/agente/getById",agenteController.getById);
router.post("/agente/post",agenteController.post);
router.put("/agente/updateById",agenteController.updateById);
router.delete("/agente/deleteById",agenteController.deleteById);

//Freelance
router.get("/freelance/getAll",freelanceController.getAll);
router.post("/freelance/getById",freelanceController.getById);
router.post("/freelance/post",freelanceController.post);
router.put("/freelance/updateById",freelanceController.updateById);
router.delete("/freelance/deleteById",freelanceController.deleteById);

//Membresía
router.get("/membresia/getAll",membresiaController.getAll);
router.post("/membresia/getById",membresiaController.getById);
router.post("/membresia/post",membresiaController.post);
router.put("/membresia/updateById",membresiaController.updateById);
router.delete("/membresia/deleteById",membresiaController.deleteById);

//Plataforma
router.get("/plataforma/getAll",plataformaController.getAll);
router.post("/plataforma/getById",plataformaController.getById);
router.post("/plataforma/post",plataformaController.post);
router.put("/plataforma/updateById",plataformaController.updateById);
router.delete("/plataforma/deleteById",plataformaController.deleteById);

//Producto
router.get("/producto/getAll",productoController.getAll);
router.post("/producto/getById",productoController.getById);
router.post("/producto/post",productoController.post);
router.put("/producto/updateById",productoController.updateById);
router.delete("/producto/deleteById",productoController.deleteById);

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
