const router = require('express').Router();
const connection = require('../models/connection');
const auth = connection.auth();
const adminAuth = connection.adminAuth();
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const password = 'imprimir';
const firebase = require("firebase");

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


login = (req, res, next) => {
    let encryptedPass = encrypt(req.body.password);
    auth.signInWithEmailAndPassword(req.body.email, encryptedPass).then(user => {
        
        console.log('Logged / Ingresado');
        authCustomToken(req, res, next, user.uid);

        //Authentication with Session Persistence / Autenticación con Persistencia de Sesión
        auth.setPersistence(firebase.auth.Auth.Persistence.NONE).then(() => { 
            console.log('Persisted / Persistido');  
        })
        
    })
    .catch(err => {
        obj = {
            status: 400,
            message: 'User does not exist / El usuario no existe'
        }
        res.status(400).send(obj)
    })  
}

authCustomToken = (req, res, next, uid) => {
    //Authentication with Custom Token / Autenticación con Token Personalizado
    adminAuth.createCustomToken(uid).then(customToken => {
        auth.signInWithCustomToken(customToken).then(() =>{
            next();
            console.log('Auth with Custom Token / Autenticado con Token Personalizado');
        })
    }).catch(error =>{
        console.log('Error authenticating / Error autenticando');
    });
}


logout = (req, res, next) => {
    auth.signOut().then(response => {
        console.log('SignOut succesfully / Sesión cerrada exitosamente');
    }).catch(err =>{
        console.log(err);
    });
}

verifyEmail = (req, res, next) => {
    const user = auth.currentUser;
    user.sendEmailVerification().then(function() {
        console.log('Verification Email sent / Email de verificación enviado');
    }).catch(function(error) {
        console.log(error);
    });
}

recoverPass = (req, res, next) => {
    
    auth.sendPasswordResetEmail(req.body.email).then(function() {
        obj = {
            status: 200,
            message: 'Email with link for recover password was sent / Se envió un link para recuperar contraseña'
        }
        res.status(200).send(obj);
        
      }).catch(function(error) {
        obj = {
            status: 400,
            message: 'Error, cannot send link / Error, no se pudo enviar un link'
        }
        res.status(400).send(obj); 
        console.log(error);
      });
}

getUser = (req, res, next) => {
    const user = auth.currentUser;
    let name, email, photoUrl, uid, emailVerified;

    if (user != null) {
        let userData = {
            name:user.displayName,
            email:user.email,
            photoUrl:user.photoURL,
            emailVerified:user.emailVerified,
            uid :user.uid 
        }
        obj = {
            status: 200,
            data: userData
        }
        res.status(200).send(obj);
    }
}

updateUser = (req, res, next) => {
    const user = auth.currentUser;
    let updateQuery = req.body;

    console.log(updateQuery.password);

    if(updateQuery.password){
        let encryptedPass = encrypt(updateQuery.password);
        user.updatePassword(encryptedPass).then(function() {
            console.log('Password updated / Contraseña actualizada');
        }).catch(function(error) {
            obj = {
                status: 400,
                message: 'Error, cannot update password / Error, no se pudo actualizar la contraseña'
            }
            res.status(400).send(obj); 
            console.log(error);
        });
    } else if (updateQuery.email) {
        user.updateEmail(updateQuery.email).then(function() {
                
            obj = {
                status: 200,
                message: 'Email updated / Correo actualizados'
            }
            res.status(200).send(obj); 

        }).catch(function(error) {
            obj = {
                status: 400,
                message: 'Error, cannot update email / Error, no se pudo actualizar el email'
            }
            res.status(400).send(obj); 
            console.log(error);
        });
    } 

}

deleteUser = (req, res, next)  => {
    const user = auth.currentUser;

    user.delete().then(function() {
        obj = {
            status: 200,
            message: 'User deleted / Usuario borrado'
        }
        res.status(200).send(obj); 
    }).catch(function(error) {
        obj = {
            status: 400,
            message: 'Error, cannot delete user / Error, no se pudo borrar el usuario'
        }
        res.status(400).send(obj); 
        console.log(error);
    });
}


module.exports = {
    signup: signup,
    login: login,
    logout: logout,
    verifyEmail: verifyEmail,
    recoverPass: recoverPass,
    getUser: getUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}