const PaymentService = require('../services/paymentService');

const getAllPayments = async (req, res, next) => {
    const result = await PaymentService.getAll();
    res.status(200).json(result);
    next(); 
}

const getPaymentByID = async (req, res, next) => {
    const result = await PaymentService.getByID(req.params.id);
    res.status(200).json(result);
    next(); 
}

const postPayment = async (req, res, next) => {
    const result = await PaymentService.post(req.body);
    res.status(200).json(result);
    next(); 
}

const updatePayment = async (req, res, next) => {
    const result = await PaymentService.put(req.params.id, req.body);
    res.status(200).json(result);
    next();
}

const deletePayment = async (req, res, next) => {
    const result = await PaymentService.deleteByID(req.params.id);
    res.status(200).json(result);
    next();
}

module.exports = {
    getAllPayments,
    getPaymentByID,
    postPayment,
    updatePayment,
    deletePayment
}