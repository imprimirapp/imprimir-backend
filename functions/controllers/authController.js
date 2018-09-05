const AuthService = require('../services/authService');

const signupUser = async (req, res, next)  => {
    const result = await AuthService.signup(req.body);
    res.status(200).json(result);
    next(); 
}

const loginUser = async (req, res, next)  => {
    const result = await AuthService.login(req.body);
    res.status(200).json(result);
    next(); 
}

const logoutUser = async (req, res, next)  => {
    const result = await AuthService.logout();
    res.status(200).json(result);
    next(); 
}

const verifyUser = async  (req, res, next) => {
    const result = await AuthService.verifyEmail();
    res.status(200).json(result);
    next(); 
}

const recoverPassUser = async  (req, res, next) => {
    const result = await AuthService.recoverPass(req.body);
    res.status(200).json(result);
    next(); 
}

const getCurrentUser = async  (req, res, next) => {
    const result = await AuthService.getUser();
    res.status(200).json(result);
    next(); 
}

const patchUser = async  (req, res, next) => {
    const result = await AuthService.updateUser(req.body);
    res.status(200).json(result);
    next(); 
}

const deleteCurrentUser = async  (req, res, next) => {
    const result = await AuthService.deleteUser();
    res.status(200).json(result);
    next(); 
}

module.exports = {
    signupUser,
    loginUser,
    logoutUser,
    verifyUser,
    recoverPassUser,
    getCurrentUser,
    patchUser,
    deleteCurrentUser
}