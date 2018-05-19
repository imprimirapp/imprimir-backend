const router = require('express').Router();
const connection = require('../models/connection');
const db = connection.db();

// GETALL
getAll = (req, res, next) => {
    let productoRef = db.collection('producto');
    let getAllQuery = productoRef.get()
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
            console.log('Error getting products / Error obteniendo productos', err);
        });
    return getAllQuery;    
}

//GETBYID
getById = (req, res, next) => {
    let productoRef = db.collection('producto').doc(req.body.id);
    let getByIdQuery = productoRef
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

    let objproducto = {
        designed: req.body.designed,
        dimensiones: req.body.dimensiones,
        empresa: req.body.empresa,
        freelance: req.body.freelance,
        nombre: req.body.nombre,
        outsourced: req.body.outsourced,
        plataforma: req.body.plataforma,
        precio: req.body.precio
    }

    let productoRef = db.collection('producto')
    let postQuery = productoRef.add(objproducto)
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Product created / producto creado'
        }
        res.status(200).send(obj);
    });
    return postQuery;
}

//UPDATEBYID
updateById = (req, res, next) => {
    let productoRef = db.collection('producto').doc(req.body.id)
    let updateQuery = productoRef.update(req.body)
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Product updated / producto actualizado'
        }
        res.status(200).send(obj);
    });
    return updateQuery;    
}

//DELETEBYID
deleteById = (req, res, next) => {
    let productoRef = db.collection('producto').doc(req.body.id)
    let deleteQuery = productoRef.delete()
    .then(doc => {
        obj = {
            id: doc.id,
            status: 200,
            message: 'Product deleted / producto eliminado'
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