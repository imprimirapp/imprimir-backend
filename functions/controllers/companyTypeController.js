const CompanyTypeService = require('../services/companyTypeService');

const getAllCompanyTypes = async (req, res, next) => {
    const result = await CompanyTypeService.getAll();
    res.status(200).json(result);
    next(); 
}

const getCompanyTypeByID = async (req, res, next) => {
    const result = await CompanyTypeService.getByID(req.params.id);
    res.status(200).json(result);
    next(); 
}

const postCompanyType = async (req, res, next) => {
    const result = await CompanyTypeService.post(req.body);
    res.status(200).json(result);
    next(); 
}

const updateCompanyType = async (req, res, next) => {
    const result = await CompanyTypeService.put(req.params.id, req.body);
    res.status(200).json(result);
    next();
}

const deleteCompanyType = async (req, res, next) => {
    const result = await CompanyTypeService.deleteByID(req.params.id);
    res.status(200).json(result);
    next();
}

module.exports = {
    getAllCompanyTypes,
    getCompanyTypeByID,
    postCompanyType,
    updateCompanyType,
    deleteCompanyType
}