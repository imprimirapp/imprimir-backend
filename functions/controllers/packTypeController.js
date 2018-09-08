const PackTypeService = require('../services/packTypeService');

const getAllPackTypes = async (req, res, next) => {
    const result = await PackTypeService.getAll();
    res.status(200).json(result);
    next(); 
}

const getPackTypeByID = async (req, res, next) => {
    const result = await PackTypeService.getByID(req.params.id);
    res.status(200).json(result);
    next(); 
}

const postPackType = async (req, res, next) => {
    const result = await PackTypeService.post(req.body);
    res.status(200).json(result);
    next(); 
}

const updatePackType = async (req, res, next) => {
    const result = await PackTypeService.put(req.params.id, req.body);
    res.status(200).json(result);
    next();
}

const deletePackType = async (req, res, next) => {
    const result = await PackTypeService.deleteByID(req.params.id);
    res.status(200).json(result);
    next();
}

module.exports = {
    getAllPackTypes,
    getPackTypeByID,
    postPackType,
    updatePackType,
    deletePackType
}