const router = require('express').Router();
const connection = require('../models/connection');
const db = connection.db();
const auth = connection.auth();
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const password = 'imprimir'

encrypt = (pass) =>{
    let cipher = crypto.createCipher(algorithm,password)
    let crypted = cipher.update(pass,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}


signup = (req, res, next) => {
    let encryptedPass = encrypt(req.body.password);
    let objUser = {
        username: req.body.username,
        password: encryptedPass,
        email: req.body.email
    }
    //AUTH
    auth.createUserWithEmailAndPassword(req.body.email, encryptedPass).then(user => {   
        //DB
        let userRef = db.collection('user')
        let postQuery = userRef.add(objUser)
        
        obj = {
            status: 200,
            message: 'User created succesfully / Usuario creado exitosamente'
        }

        res.status(200).send(obj);
        next();      
      
    }).catch(err => {
        obj = {
            status: 400,
            message: 'User exists already / El usuario ya existe'
        }
        res.status(400).send(obj);
    });

}

//VERIFY EMAIL (COMING SOON)
/*verifyEmail = (req, res, next) => {
    var actionCodeSettings = {
        url: 'imprimir-backend.firebaseapp.com' + req.body.email,
        handleCodeInApp: true
      };
    // VERIFY EMAIL
    auth.currentUser.sendEmailVerification(actionCodeSettings).then(resp => {
        console.log(resp);
        console.log('Check Email to verify account / Revisar Email para verificar cuenta');
    }).catch(function(error) {
        console.log('Email does not verified / Email no verificado');
    });
}*/

login = (req, res, next) => {
    let encryptedPass = encrypt(req.body.password)
    //AUTH
    auth.signInWithEmailAndPassword(req.body.email, encryptedPass).then(user =>{
        console.log('Authorized / Autorizado');   
        next();
    })
    .catch(err => {
        obj = {
            status: 400,
            message: 'User does not exist / El usuario no existe'
        }
        res.status(400).send(obj)
    })
}

getUser = (req, res, next) => {
    let encryptedPass = encrypt(req.body.password)
     //DB
     let userRef = db.collection('user')
     let queryUser = userRef.where('email', '==', req.body.email).where('password', '==', encryptedPass).get()
     .then(snapshot => {
        let docArray = [];
        snapshot.forEach(doc => {
            obj = {
                id: doc.id,
                data: doc.data()
            }
            docArray.push(obj);
        })
        res.json(docArray); 
        return docArray;
     })
     .catch(err => {
        console.log('Error getting user data / Error obteniendo datos del usuario', err);
     });
}


module.exports = {
    signup: signup,
    login: login,
    getUser: getUser
    // verifyEmail: verifyEmail (Coming soon)
}