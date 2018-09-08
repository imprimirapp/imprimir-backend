const UserTypeService = require('../services/userTypeService');

const getAllUserTypes = async (req, res, next) => {
    const result = await UserTypeService.getAll();
    res.status(200).json(result);
    next(); 
}

const getUserTypeByID = async (req, res, next) => {
    const result = await UserTypeService.getByID(req.params.id);
    res.status(200).json(result);
    next(); 
}

const postUserType = async (req, res, next) => {
    const result = await UserTypeService.post(req.body);
    res.status(200).json(result);
    next(); 
}

const updateUserType = async (req, res, next) => {
    const result = await UserTypeService.put(req.params.id, req.body);
    res.status(200).json(result);
    next();
}

const deleteUserType = async (req, res, next) => {
    const result = await UserTypeService.deleteByID(req.params.id);
    res.status(200).json(result);
    next();
}

module.exports = {
    getAllUserTypes,
    getUserTypeByID,
    postUserType,
    updateUserType,
    deleteUserType
}