const DesignService = require('../services/designService');

const getAllDesigns = async (req, res, next) => {
    const result = await DesignService.getAll();
    res.status(200).json(result);
    next(); 
}

const getDesignByID = async (req, res, next) => {
    const result = await DesignService.getByID(req.params.id);
    res.status(200).json(result);
    next(); 
}

const postDesign = async (req, res, next) => {
    const result = await DesignService.post(req.body);
    res.status(200).json(result);
    next(); 
}

const updateDesign = async (req, res, next) => {
    const result = await DesignService.put(req.params.id, req.body);
    res.status(200).json(result);
    next();
}

const deleteDesign = async (req, res, next) => {
    const result = await DesignService.deleteByID(req.params.id);
    res.status(200).json(result);
    next();
}

module.exports = {
    getAllDesigns,
    getDesignByID,
    postDesign,
    updateDesign,
    deleteDesign
}