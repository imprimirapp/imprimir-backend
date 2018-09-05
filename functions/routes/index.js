const express = require('express');
const router = express.Router();


//Home 
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

//Controllers
const authController = require('../controllers/authController');
const companyController = require('../controllers/companyController');
const companyTypeController = require('../controllers/companyTypeController');
const designController = require('../controllers/designController');

//Auth
router.post("/auth/signup", authController.signupUser, authController.verifyUser);
router.post("/auth/login", authController.loginUser);
router.get("/auth/logout", authController.logoutUser);
router.post("/auth/recoverPass", authController.recoverPassUser);
router.get("/auth/getUser", authController.getCurrentUser);
router.patch("/auth/update", authController.patchUser);
router.delete("/auth/delete", authController.deleteCurrentUser);


//Company
router.get("/company/getAll", companyController.getAllCompanies);
router.get("/company/getByID/:id", companyController.getCompanyByID);
router.post("/company/post", companyController.postCompany);
router.put("/company/put/:id", companyController.updateCompany);
router.delete("/company/delete/:id", companyController.deleteCompany);

//Company Type
router.get("/company_type/getAll", companyTypeController.getAllCompanyTypes);
router.get("/company_type/getByID/:id", companyTypeController.getCompanyTypeByID);
router.post("/company_type/post", companyTypeController.postCompanyType);
router.put("/company_type/put/:id", companyTypeController.updateCompanyType);
router.delete("/company_type/delete/:id", companyTypeController.deleteCompanyType);

//Design
router.get("/design/getAll", designController.getAllDesigns);
router.get("/design/getByID/:id", designController.getDesignByID);
router.post("/design/post", designController.postDesign);
router.put("/design/put/:id", designController.updateDesign);
router.delete("/design/delete/:id", designController.deleteDesign);


/*//Storage
router.post("/storage/uploadFile", storageController.uploadFile);
router.post("/storage/downloadFile", storageController.downloadFile);
router.delete("/storage/deleteFile", storageController.deleteFile);*/

module.exports = router;
