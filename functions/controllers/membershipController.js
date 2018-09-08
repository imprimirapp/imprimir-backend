const MembershipService = require('../services/membershipService');

const getAllMemberships = async (req, res, next) => {
    const result = await MembershipService.getAll();
    res.status(200).json(result);
    next(); 
}

const getMembershipByID = async (req, res, next) => {
    const result = await MembershipService.getByID(req.params.id);
    res.status(200).json(result);
    next(); 
}

const postMembership = async (req, res, next) => {
    const result = await MembershipService.post(req.body);
    res.status(200).json(result);
    next(); 
}

const updateMembership = async (req, res, next) => {
    const result = await MembershipService.put(req.params.id, req.body);
    res.status(200).json(result);
    next();
}

const deleteMembership = async (req, res, next) => {
    const result = await MembershipService.deleteByID(req.params.id);
    res.status(200).json(result);
    next();
}

module.exports = {
    getAllMemberships,
    getMembershipByID,
    postMembership,
    updateMembership,
    deleteMembership
}