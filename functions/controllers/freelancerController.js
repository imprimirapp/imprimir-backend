const FreelancerService = require('../services/freelancerService');

const getAllFreelancers = async (req, res, next) => {
    const result = await FreelancerService.getAll();
    res.status(200).json(result);
    next(); 
}

const getFreelancerByID = async (req, res, next) => {
    const result = await FreelancerService.getByID(req.params.id);
    res.status(200).json(result);
    next(); 
}

const postFreelancer = async (req, res, next) => {
    const result = await FreelancerService.post(req.body);
    res.status(200).json(result);
    next(); 
}

const updateFreelancer = async (req, res, next) => {
    const result = await FreelancerService.put(req.params.id, req.body);
    res.status(200).json(result);
    next();
}

const deleteFreelancer = async (req, res, next) => {
    const result = await FreelancerService.deleteByID(req.params.id);
    res.status(200).json(result);
    next();
}

module.exports = {
    getAllFreelancers,
    getFreelancerByID,
    postFreelancer,
    updateFreelancer,
    deleteFreelancer
}