const ProviderService = require('../services/providerService');

const getAllProviders = async (req, res, next) => {
    const result = await ProviderService.getAll();
    res.status(200).json(result);
    next(); 
}

const getProviderByID = async (req, res, next) => {
    const result = await ProviderService.getByID(req.params.id);
    res.status(200).json(result);
    next(); 
}

const postProvider = async (req, res, next) => {
    const result = await ProviderService.post(req.body);
    res.status(200).json(result);
    next(); 
}

const updateProvider = async (req, res, next) => {
    const result = await ProviderService.put(req.params.id, req.body);
    res.status(200).json(result);
    next();
}

const deleteProvider = async (req, res, next) => {
    const result = await ProviderService.deleteByID(req.params.id);
    res.status(200).json(result);
    next();
}

module.exports = {
    getAllProviders,
    getProviderByID,
    postProvider,
    updateProvider,
    deleteProvider
}