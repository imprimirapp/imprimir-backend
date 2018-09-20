const ProductStorageService = require('../services/productStorageService');

const uploadProduct = async (req, res, next) => {
    const result = await ProductStorageService.uploadFile(req.body);
    res.status(200).json(result);
    next(); 
}

const deleteProduct = async (req, res, next) => {
    const result = await ProductStorageService.deleteFile(req.body);
    res.status(200).json(result);
    next(); 
}

const downloadProduct = async (req, res, next) => {
    const result = await ProductStorageService.downloadFile(req.body);
    res.status(200).json(result);
    next(); 
}

module.exports = {
    uploadProduct,
    deleteProduct,
    downloadProduct
}