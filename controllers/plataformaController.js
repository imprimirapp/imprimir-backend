const router = require('express').Router();
const connection = require('../models/connection');
const db = connection.db();

// GETALL
getAll = (req, res, next) => {
    let plataformaRef = db.collection('plataforma');
    let getAllQuery = plataformaRef.get()
        .then(snapshot => {
            let docArray = [];
            snapshot.forEach(doc => {
                obj = {
                    id: doc.id,
                    data: doc.data()
                }
                docArray.push(obj);
            });
            res.json(docArray);
        })
        .catch(err => {
            console.log('Error getting platforms / Error obteniendo plataformas', err);
        });
    return getAllQuery;    
}

//GETBYID
getById = (req, res, next) => {
    let plataformaRef = db.collection('plataforma').doc(req.body.id);
    let getByIdQuery = plataformaRef
    .onSnapshot(doc => {
        obj = {
            id: doc.id,
            data: doc.data()
        }
        res.json(obj);
    }, err => {
        console.log(`Encountered error / Error encontrado: ${err}`);
    })
    return getByIdQuery;    
}

//POST
post = (req, res, next)  => {

    let objplataforma = {
        nombre: req.body.nombre,
        tipo: req.body.tipo,
    }

    let plataformaRef = db.collection('plataforma')
    let postQuery = plataformaRef.add(objplataforma)
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Platform created / plataforma creada'
        }
        res.status(200).send(obj);
    });
    return postQuery;
}

//UPDATEBYID
updateById = (req, res, next) => {
    let plataformaRef = db.collection('plataforma').doc(req.body.id)
    let updateQuery = plataformaRef.update(req.body)
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Platform updated / plataforma actualizada'
        }
        res.status(200).send(obj);
    });
    return updateQuery;    
}

//DELETEBYID
deleteById = (req, res, next) => {
    let plataformaRef = db.collection('plataforma').doc(req.body.id)
    let deleteQuery = plataformaRef.delete()
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Platform deleted / plataforma eliminada'
        }
        res.status(200).send(obj);
    });
    return deleteQuery;    
}

module.exports = {
    getAll: getAll,
    getById: getById,
    post: post,
    updateById: updateById,
    deleteById: deleteById
}