const MembershipTypeService = require('../services/membershipTypeService');

const getAllMembershipTypes = async (req, res, next) => {
    const result = await MembershipTypeService.getAll();
    res.status(200).json(result);
    next(); 
}

const getMembershipTypeByID = async (req, res, next) => {
    const result = await MembershipTypeService.getByID(req.params.id);
    res.status(200).json(result);
    next(); 
}

const postMembershipType = async (req, res, next) => {
    const result = await MembershipTypeService.post(req.body);
    res.status(200).json(result);
    next(); 
}

const updateMembershipType = async (req, res, next) => {
    const result = await MembershipTypeService.put(req.params.id, req.body);
    res.status(200).json(result);
    next();
}

const deleteMembershipType = async (req, res, next) => {
    const result = await MembershipTypeService.deleteByID(req.params.id);
    res.status(200).json(result);
    next();
}

module.exports = {
    getAllMembershipTypes,
    getMembershipTypeByID,
    postMembershipType,
    updateMembershipType,
    deleteMembershipType
}