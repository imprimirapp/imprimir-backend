const router = require('express').Router();
const connection = require('../models/connection');
const db = connection.db();

// GETALL
getAll = (req, res, next) => {
    let empresaRef = db.collection('empresa');
    let getAllQuery = empresaRef.get()
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
            console.log('Error getting documents', err);
        });
    return getAllQuery;    
}

//GETBYID
getById = (req, res, next) => {
    let empresaRef = db.collection('empresa').doc(req.body.id);
    let getByIdQuery = empresaRef
    .onSnapshot(doc => {
        obj = {
            id: doc.id,
            data: doc.data()
        }
        res.json(obj);
    }, err => {
        console.log(`Encountered error: ${err}`);
    })
    return getByIdQuery;    
}

//POST
post = (req, res, next)  => {
    let objEmpresa = {
        ciudad_oficina: req.body.ciudad_oficina,
        departamento_oficina: req.body.departamento_oficina,
        direccion_oficina: req.body.direccion_oficina,
        diseno: req.body.diseno,
        email: req.body.email,
        facebook_id: req.body.facebook_id,
        freelance: req.body.freelance,
        google_id: req.body.google_id,
        user_id: req.body.user_id,
        nombre: req.body.nombre,
        nombre_contacto: req.body.nombre_contacto,
        plataforma: req.body.plataforma,
        producto: req.body.producto,
        rut_nit: req.body.rut_nit,
        telefono_contacto: req.body.telefono_contacto
    }

    let empresaRef = db.collection('empresa')
    let postQuery = empresaRef.add(objEmpresa)
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Document created'
        }
        res.status(200).send(obj);
    });
    return postQuery;
}

//UPDATEBYID
updateById = (req, res, next) => {
    let empresaRef = db.collection('empresa').doc(req.body.id)
    let updateQuery = empresaRef.update(req.body)
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Document updated'
        }
        res.status(200).send(obj);
    });
    return updateQuery;    
}

//DELETEBYID
deleteById = (req, res, next) => {
    let empresaRef = db.collection('empresa').doc(req.body.id)
    let deleteQuery = empresaRef.delete()
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Document deleted'
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