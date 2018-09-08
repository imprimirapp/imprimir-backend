const UserService = require('../services/userService');

const getAllUsers = async (req, res, next) => {
    const result = await UserService.getAll();
    res.status(200).json(result);
    next(); 
}

const getUserByID = async (req, res, next) => {
    const result = await UserService.getByID(req.params.id);
    res.status(200).json(result);
    next(); 
}

const postUser = async (req, res, next) => {
    const result = await UserService.post(req.body);
    res.status(200).json(result);
    next(); 
}

const updateUser = async (req, res, next) => {
    const result = await UserService.put(req.params.id, req.body);
    res.status(200).json(result);
    next();
}

const deleteUser = async (req, res, next) => {
    const result = await UserService.deleteByID(req.params.id);
    res.status(200).json(result);
    next();
}

module.exports = {
    getAllUsers,
    getUserByID,
    postUser,
    updateUser,
    deleteUser
}