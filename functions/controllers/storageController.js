const router = require('express').Router();
const connection = require('../models/connection');
const storage = connection.storage();
let bucket = storage.bucket();

uploadFile = (req, res, next)  => {
    bucket.upload(req.body.path, function(err, file, apiResponse) {
        obj = {
            status: 200,
            message: 'File uploaded / Archivo subido'
        }
        res.status(200).send(obj);
        console.log(file.metadata.id);
      })
}

deleteFile = (req, res, next) => {
    let file = bucket.file(req.body.file);
    file.delete().then(function(data) {
        obj = {
            status: 200,
            message: 'File deleted / Archivo borrado'
        }
        res.status(200).send(obj);
        console.log(data);
    });
}

downloadFile = (req, res, next) => {
    let file = bucket.file(req.body.file);
    let dest = req.body.destination;
    file.download({destination: `${dest}/${req.body.file}`}).then(function(data) {
        obj = {
            status: 200,
            message: `File downloaded / Archivo descargado en ${dest}`
        }
        res.status(200).send(obj);
        console.log(data);
    }).catch(err  => {
        console.log(err);
    });
}



module.exports = {
    uploadFile: uploadFile,
    downloadFile: downloadFile,
    deleteFile: deleteFile
}