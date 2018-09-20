const connection = require('../models/connection');
const storage = connection.storage();
let bucket = storage.bucket();

uploadFile = (body)  => {
    return new Promise((resolve, reject) =>{
        bucket.upload(body.path, {destination: bucket.file(`pack/${(new Date().getTime()/1000)}.png`)}, function(err, file, apiResponse) {
            obj = {
                status: 200,
                file: file.metadata.id,
                message: 'File uploaded / Archivo subido'
            }
            resolve(obj);
        })
    })
}

deleteFile = (body)  => {
    return new Promise((resolve, reject) =>{
        let file = bucket.file(`pack/${body.file}`);
        file.delete().then(function(data) {
            obj = {
                status: 200,
                file: file.metadata.id,
                message: 'File deleted / Archivo borrado'
            }
            resolve(obj);
        });
    })
}

downloadFile = (body)  => {
    return new Promise((resolve, reject) =>{
        let file = bucket.file(`pack/${body.file}`);
        let dest = body.destination;
        file.download({destination: `${dest}/${body.file}`}).then(function(data) {
            obj = {
                status: 200,
                file: file.metadata.id,
                message: `File downloaded / Archivo descargado en ${dest}`
            }
            resolve(obj);
        }).catch(err  => {
            console.log(err);
        });
    })
}

module.exports = {
    uploadFile: uploadFile,
    downloadFile: downloadFile,
    deleteFile: deleteFile
}