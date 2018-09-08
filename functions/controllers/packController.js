const PackService = require('../services/packService');

const getAllPacks = async (req, res, next) => {
    const result = await PackService.getAll();
    res.status(200).json(result);
    next(); 
}

const getPackByID = async (req, res, next) => {
    const result = await PackService.getByID(req.params.id);
    res.status(200).json(result);
    next(); 
}

const postPack = async (req, res, next) => {
    const result = await PackService.post(req.body);
    res.status(200).json(result);
    next(); 
}

const updatePack = async (req, res, next) => {
    const result = await PackService.put(req.params.id, req.body);
    res.status(200).json(result);
    next();
}

const deletePack = async (req, res, next) => {
    const result = await PackService.deleteByID(req.params.id);
    res.status(200).json(result);
    next();
}

module.exports = {
    getAllPacks,
    getPackByID,
    postPack,
    updatePack,
    deletePack
}