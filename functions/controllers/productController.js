const ProductService = require('../services/productService');

const getAllProducts = async (req, res, next) => {
    const result = await ProductService.getAll();
    res.status(200).json(result);
    next(); 
}

const getProductByID = async (req, res, next) => {
    const result = await ProductService.getByID(req.params.id);
    res.status(200).json(result);
    next(); 
}

const postProduct = async (req, res, next) => {
    const result = await ProductService.post(req.body);
    res.status(200).json(result);
    next(); 
}

const updateProduct = async (req, res, next) => {
    const result = await ProductService.put(req.params.id, req.body);
    res.status(200).json(result);
    next();
}

const deleteProduct = async (req, res, next) => {
    const result = await ProductService.deleteByID(req.params.id);
    res.status(200).json(result);
    next();
}

module.exports = {
    getAllProducts,
    getProductByID,
    postProduct,
    updateProduct,
    deleteProduct
}