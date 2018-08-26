const CompanyService = require('../services/companyService');

const getAllCompanies = async (req, res, next) => {
    const result = await CompanyService.getAll();
    res.status(200).json(result);
    next(); 
}

const getCompanyByID = async (req, res, next) => {
    const result = await CompanyService.getByID(req.params.id);
    res.status(200).json(result);
    next(); 
}

const postCompany = async (req, res, next) => {
    const result = await CompanyService.post(req.body);
    res.status(200).json(result);
    next(); 
}

const updateCompany = async (req, res, next) => {
    const result = await CompanyService.put(req.params.id, req.body);
    res.status(200).json(result);
    next();
}

const deleteCompany = async (req, res, next) => {
    const result = await CompanyService.deleteByID(req.params.id);
    res.status(200).json(result);
    next();
}

module.exports = {
    getAllCompanies,
    getCompanyByID,
    postCompany,
    updateCompany,
    deleteCompany
}