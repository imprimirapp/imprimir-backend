const router = require('express').Router();
const connection = require('../models/connection');
const db = connection.db();

// GETALL
getAll = (req, res, next) => {
    let freelanceRef = db.collection('freelance');
    let getAllQuery = freelanceRef.get()
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
            console.log('Error getting freelancers / Error obteniendo freelancers', err);
        });
    return getAllQuery;    
}

//GETBYID
getById = (req, res, next) => {
    let freelanceRef = db.collection('freelance').doc(req.body.id);
    let getByIdQuery = freelanceRef
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

    let objfreelance = {
        comentarios: req.body.comentarios,
        completados: req.body.completados,
        email: req.body.email,
        facebook_id: req.body.facebook_id,
        google_id: req.body.google_id,
        user_id: req.body.user_id,
        membresia: req.body.membresia,
        numero_tdc: req.body.numero_tdc,
        nombre: req.body.nombre,
        plataforma: req.body.plataforma,
        puntaje: req.body.puntaje,
        telefono: req.body.telefono
    }

    let freelanceRef = db.collection('freelance')
    let postQuery = freelanceRef.add(objfreelance)
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Freelance created / freelance creado'
        }
        res.status(200).send(obj);
    });
    return postQuery;
}

//UPDATEBYID
updateById = (req, res, next) => {
    let freelanceRef = db.collection('freelance').doc(req.body.id)
    let updateQuery = freelanceRef.update(req.body)
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Freelance updated / freelance actualizado'
        }
        res.status(200).send(obj);
    });
    return updateQuery;    
}

//DELETEBYID
deleteById = (req, res, next) => {
    let freelanceRef = db.collection('freelance').doc(req.body.id)
    let deleteQuery = freelanceRef.delete()
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Freelance deleted / freelance eliminado'
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