const ProductTypeService = require('../services/productTypeService');

const getAllProductTypes = async (req, res, next) => {
    const result = await ProductTypeService.getAll();
    res.status(200).json(result);
    next(); 
}

const getProductTypeByID = async (req, res, next) => {
    const result = await ProductTypeService.getByID(req.params.id);
    res.status(200).json(result);
    next(); 
}

const postProductType = async (req, res, next) => {
    const result = await ProductTypeService.post(req.body);
    res.status(200).json(result);
    next(); 
}

const updateProductType = async (req, res, next) => {
    const result = await ProductTypeService.put(req.params.id, req.body);
    res.status(200).json(result);
    next();
}

const deleteProductType = async (req, res, next) => {
    const result = await ProductTypeService.deleteByID(req.params.id);
    res.status(200).json(result);
    next();
}

module.exports = {
    getAllProductTypes,
    getProductTypeByID,
    postProductType,
    updateProductType,
    deleteProductType
}