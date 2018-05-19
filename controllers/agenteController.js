const router = require('express').Router();
const connection = require('../models/connection');
const db = connection.db();

// GETALL
getAll = (req, res, next) => {
    let agenteRef = db.collection('agente');
    let getAllQuery = agenteRef.get()
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
            console.log('Error getting agents / Error obteniendo agentes', err);
        });
    return getAllQuery;    
}

//GETBYID
getById = (req, res, next) => {
    let agenteRef = db.collection('agente').doc(req.body.id);
    let getByIdQuery = agenteRef
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

    let objagente = {
        ciudad_oficina: req.body.ciudad_oficina,
        departamento_oficina: req.body.departamento_oficina,
        pais_oficina: req.body.pais_oficina,
        direccion_oficina: req.body.direccion_oficina,
        email: req.body.email,
        facebook_id: req.body.facebook_id,
        freelance: req.body.freelance,
        google_id: req.body.google_id,
        user_id: req.body.user_id,
        nombre: req.body.nombre,
        nombre_contacto: req.body.nombre_contacto,
        plataforma: req.body.plataforma,
        rut_nit: req.body.rut_nit,
        telefono_contacto: req.body.telefono_contacto
    }

    let agenteRef = db.collection('agente')
    let postQuery = agenteRef.add(objagente)
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Agent created / agente creado'
        }
        res.status(200).send(obj);
    });
    return postQuery;
}

//UPDATEBYID
updateById = (req, res, next) => {
    let agenteRef = db.collection('agente').doc(req.body.id)
    let updateQuery = agenteRef.update(req.body)
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Agent updated / agente actualizado'
        }
        res.status(200).send(obj);
    });
    return updateQuery;    
}

//DELETEBYID
deleteById = (req, res, next) => {
    let agenteRef = db.collection('agente').doc(req.body.id)
    let deleteQuery = agenteRef.delete()
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Agent deleted / agente eliminado'
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