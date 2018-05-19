const router = require('express').Router();
const connection = require('../models/connection');
const db = connection.db();

// GETALL
getAll = (req, res, next) => {
    let membresiaRef = db.collection('membresia');
    let getAllQuery = membresiaRef.get()
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
            console.log('Error getting memberships / Error obteniendo membresías', err);
        });
    return getAllQuery;    
}

//GETBYID
getById = (req, res, next) => {
    let membresiaRef = db.collection('membresia').doc(req.body.id);
    let getByIdQuery = membresiaRef
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

    let objmembresia = {
        costo: req.body.costo,
        nombre: req.body.nombre,
        tipo: req.body.tipo,
    }

    let membresiaRef = db.collection('membresia')
    let postQuery = membresiaRef.add(objmembresia)
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Membership created / membresia creada'
        }
        res.status(200).send(obj);
    });
    return postQuery;
}

//UPDATEBYID
updateById = (req, res, next) => {
    let membresiaRef = db.collection('membresia').doc(req.body.id)
    let updateQuery = membresiaRef.update(req.body)
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Membership updated / membresia actualizada'
        }
        res.status(200).send(obj);
    });
    return updateQuery;    
}

//DELETEBYID
deleteById = (req, res, next) => {
    let membresiaRef = db.collection('membresia').doc(req.body.id)
    let deleteQuery = membresiaRef.delete()
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Membership deleted / membresia eliminada'
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