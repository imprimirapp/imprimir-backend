const PaymentMethodService = require('../services/paymentMethodService');

const getAllPaymentMethods = async (req, res, next) => {
    const result = await PaymentMethodService.getAll();
    res.status(200).json(result);
    next(); 
}

const getPaymentMethodByID = async (req, res, next) => {
    const result = await PaymentMethodService.getByID(req.params.id);
    res.status(200).json(result);
    next(); 
}

const postPaymentMethod = async (req, res, next) => {
    const result = await PaymentMethodService.post(req.body);
    res.status(200).json(result);
    next(); 
}

const updatePaymentMethod = async (req, res, next) => {
    const result = await PaymentMethodService.put(req.params.id, req.body);
    res.status(200).json(result);
    next();
}

const deletePaymentMethod = async (req, res, next) => {
    const result = await PaymentMethodService.deleteByID(req.params.id);
    res.status(200).json(result);
    next();
}

module.exports = {
    getAllPaymentMethods,
    getPaymentMethodByID,
    postPaymentMethod,
    updatePaymentMethod,
    deletePaymentMethod
}