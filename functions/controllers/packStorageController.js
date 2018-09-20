const PackStorageService = require('../services/packStorageService');

const uploadPack = async (req, res, next) => {
    const result = await PackStorageService.uploadFile(req.body);
    res.status(200).json(result);
    next(); 
}

const deletePack = async (req, res, next) => {
    const result = await PackStorageService.deleteFile(req.body);
    res.status(200).json(result);
    next(); 
}

const downloadPack = async (req, res, next) => {
    const result = await PackStorageService.downloadFile(req.body);
    res.status(200).json(result);
    next(); 
}

module.exports = {
    uploadPack,
    deletePack,
    downloadPack
}