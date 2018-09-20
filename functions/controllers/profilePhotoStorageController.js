const ProfilePhotoStorageService = require('../services/profilePhotoStorageService');

const uploadProfilePhoto = async (req, res, next) => {
    const result = await ProfilePhotoStorageService.uploadFile(req.body);
    res.status(200).json(result);
    next(); 
}

const deleteProfilePhoto = async (req, res, next) => {
    const result = await ProfilePhotoStorageService.deleteFile(req.body);
    res.status(200).json(result);
    next(); 
}

const downloadProfilePhoto = async (req, res, next) => {
    const result = await ProfilePhotoStorageService.downloadFile(req.body);
    res.status(200).json(result);
    next(); 
}

module.exports = {
    uploadProfilePhoto,
    deleteProfilePhoto,
    downloadProfilePhoto
}