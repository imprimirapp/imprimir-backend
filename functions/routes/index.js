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
const freelancerController = require('../controllers/freelancerController');
const membershipController = require('../controllers/membershipController');
const membershipTypeController = require('../controllers/membershipTypeController');
const packController = require('../controllers/packController');
const packStorageController = require('../controllers/packStorageController');
const packTypeController = require('../controllers/packTypeController');
const paymentController = require('../controllers/paymentController');
const paymentMethodController = require('../controllers/paymentMethodController');
const productController = require('../controllers/productController');
const productStorageController = require('../controllers/productStorageController');
const productTypeController = require('../controllers/productTypeController');
const profilePhotoStorageController = require('../controllers/profilePhotoStorageController');
const providerController = require('../controllers/providerController');
const userController = require('../controllers/userController');
const userTypeController = require('../controllers/userTypeController');


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

//Freelancer
router.get("/freelancer/getAll", freelancerController.getAllFreelancers);
router.get("/freelancer/getByID/:id", freelancerController.getFreelancerByID);
router.post("/freelancer/post", freelancerController.postFreelancer);
router.put("/freelancer/put/:id", freelancerController.updateFreelancer);
router.delete("/freelancer/delete/:id", freelancerController.deleteFreelancer);

//Membership
router.get("/membership/getAll", membershipController.getAllMemberships);
router.get("/membership/getByID/:id", membershipController.getMembershipByID);
router.post("/membership/post", membershipController.postMembership);
router.put("/membership/put/:id", membershipController.updateMembership);
router.delete("/membership/delete/:id", membershipController.deleteMembership);

//Membership Type
router.get("/membershipType/getAll", membershipTypeController.getAllMembershipTypes);
router.get("/membershipType/getByID/:id", membershipTypeController.getMembershipTypeByID);
router.post("/membershipType/post", membershipTypeController.postMembershipType);
router.put("/membershipType/put/:id", membershipTypeController.updateMembershipType);
router.delete("/membershipType/delete/:id", membershipTypeController.deleteMembershipType);

//Pack
router.get("/pack/getAll", packController.getAllPacks);
router.get("/pack/getByID/:id", packController.getPackByID);
router.post("/pack/post", packController.postPack);
router.put("/pack/put/:id", packController.updatePack);
router.delete("/pack/delete/:id", packController.deletePack);

//Pack Storage
router.post("/packStorage/uploadPack", packStorageController.uploadPack);
router.post("/packStorage/downloadPack", packStorageController.downloadPack);
router.delete("/packStorage/deletePack", packStorageController.deletePack);

//Pack Type
router.get("/packType/getAll", packTypeController.getAllPackTypes);
router.get("/packType/getByID/:id", packTypeController.getPackTypeByID);
router.post("/packType/post", packTypeController.postPackType);
router.put("/packType/put/:id", packTypeController.updatePackType);
router.delete("/packType/delete/:id", packTypeController.deletePackType);

//Payment
router.get("/payment/getAll", paymentController.getAllPayments);
router.get("/payment/getByID/:id", paymentController.getPaymentByID);
router.post("/payment/post", paymentController.postPayment);
router.put("/payment/put/:id", paymentController.updatePayment);
router.delete("/payment/delete/:id", paymentController.deletePayment);

//Payment Method
router.get("/paymentMethod/getAll", paymentMethodController.getAllPaymentMethods);
router.get("/paymentMethod/getByID/:id", paymentMethodController.getPaymentMethodByID);
router.post("/paymentMethod/post", paymentMethodController.postPaymentMethod);
router.put("/paymentMethod/put/:id", paymentMethodController.updatePaymentMethod);
router.delete("/paymentMethod/delete/:id", paymentMethodController.deletePaymentMethod);

//Product
router.get("/product/getAll", productController.getAllProducts);
router.get("/product/getByID/:id", productController.getProductByID);
router.post("/product/post", productController.postProduct);
router.put("/product/put/:id", productController.updateProduct);
router.delete("/product/delete/:id", productController.deleteProduct);

//Product Storage
router.post("/productStorage/uploadProduct", productStorageController.uploadProduct);
router.post("/productStorage/downloadProduct", productStorageController.downloadProduct);
router.delete("/productStorage/deleteProduct", productStorageController.deleteProduct);

//Product Type
router.get("/productType/getAll", productTypeController.getAllProductTypes);
router.get("/productType/getByID/:id", productTypeController.getProductTypeByID);
router.post("/productType/post", productTypeController.postProductType);
router.put("/productType/put/:id", productTypeController.updateProductType);
router.delete("/productType/delete/:id", productTypeController.deleteProductType);

//Profile Photo Storage
router.post("/profilePhotoStorage/uploadProfilePhoto", profilePhotoStorageController.uploadProfilePhoto);
router.post("/profilePhotoStorage/downloadProfilePhoto", profilePhotoStorageController.downloadProfilePhoto);
router.delete("/profilePhotoStorage/deleteProfilePhoto", profilePhotoStorageController.deleteProfilePhoto);

//Provider
router.get("/provider/getAll", providerController.getAllProviders);
router.get("/provider/getByID/:id", providerController.getProviderByID);
router.post("/provider/post", providerController.postProvider);
router.put("/provider/put/:id", providerController.updateProvider);
router.delete("/provider/delete/:id", providerController.deleteProvider);

//User
router.get("/user/getAll", userController.getAllUsers);
router.get("/user/getByID/:id", userController.getUserByID);
router.post("/user/post", userController.postUser);
router.put("/user/put/:id", userController.updateUser);
router.delete("/user/delete/:id", userController.deleteUser);

//User Type
router.get("/userType/getAll", userTypeController.getAllUserTypes);
router.get("/userType/getByID/:id", userTypeController.getUserTypeByID);
router.post("/userType/post", userTypeController.postUserType);
router.put("/userType/put/:id", userTypeController.updateUserType);
router.delete("/userType/delete/:id", userTypeController.deleteUserType);


module.exports = router;
