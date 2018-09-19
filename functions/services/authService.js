const connection = require('../models/connection');
const auth = connection.auth();
const adminAuth = connection.adminAuth();
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const password = 'imprimir';


encrypt = (pass) =>{
    let cipher = crypto.createCipher(algorithm,password)
    let crypted = cipher.update(pass,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}


signup = (body) => {
    return new Promise ((resolve) => {
        let encryptedPass = encrypt(body.password);
        let objUser = {
            username: body.username,
            password: encryptedPass,
            email: body.email
        }
        //AUTH
        auth.createUserWithEmailAndPassword(objUser.email, encryptedPass).then(user => {   

            user.updateProfile({
                displayName: objUser.username
            }).then(d => {
                obj = {
                    data: d,
                    status: 200,
                    message: 'User created succesfully / Usuario creado exitosamente'
                }
        
                resolve(obj);
            })
          
        }).catch(err => {
            obj = {
                data: err,
                status: 400,
                message: 'User exists already / El usuario ya existe'
            }
            resolve(obj);
        });
    });
}


login = (body) => {
    return new Promise ((resolve) => {
        let encryptedPass = encrypt(body.password);
        auth.signInWithEmailAndPassword(body.email, encryptedPass).then(user => {
            
           adminAuth.createCustomToken(user.uid).then(customToken => {
            console.log('CUSTOM TOKEN', customToken);
            let authObj = {
                token: customToken,
                data: user,
                status: 200,
                message: 'Logged / Ingresado'
            } 

            resolve(authObj);
    
           });
            
        })
        .catch(err => {
            obj = {
                error: err,
                status: 400,
                message: 'User does not exist / El usuario no existe'
            }
            resolve(obj);
        })
    });
}


logout = () => {
    return new Promise ((resolve, reject) => {
        auth.signOut().then(response => {
            let logoutObj = {
                status: 200,
                message: 'SignOut succesfully / Sesión cerrada exitosamente'
            }
            resolve(logoutObj)
        }).catch(err =>{
            reject(err);
        });
    });
    
}

verifyEmail = () => {
    return new Promise ((resolve, reject) => { 
        const user = auth.currentUser;
        user.sendEmailVerification().then(function() {
            let verifyObj = {
                status: 200,
                message: 'Verification Email sent / Email de verificación enviado'
            }
            resolve(verifyObj)
        }).catch(function(error) {
            reject(error);
        });
    });
}

recoverPass = (body) => {
    return new Promise ((resolve) => { 
        auth.sendPasswordResetEmail(body.email).then(function() {
            obj = {
                status: 200,
                message: 'Email with link for recover password was sent / Se envió un link para recuperar contraseña'
            }
            resolve(obj)
        }).catch(function(error) {
            obj = {
                data: error,
                status: 400,
                message: 'Error, cannot send link / Error, no se pudo enviar un link'
            }
            resolve(obj);
        });
    });
}

getUser = () => {
    return new Promise ((resolve) => { 
        const user = auth.currentUser;

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
                resolve(obj);
            } else {
                objError = {
                    status: 400,
                    message: 'Error getting user'
                }
                resolve(objError)
            }
    });
   
}

updateUser = (updateQuery) => {
    console.log(updateQuery);

    return new Promise ((resolve) => { 

        const user = auth.currentUser;

        if(updateQuery.password && user){
            let encryptedPass = encrypt(updateQuery.password);
            user.updatePassword(encryptedPass).then(function() {
                obj = {
                    status: 200,
                    message: 'Password updated / Contraseña actualizada'
                }
                resolve(obj);
            }).catch(function(error) {
                obj = {
                    error: error,
                    status: 400,
                    message: 'Error, cannot update password / Error, no se pudo actualizar la contraseña'
                }
                resolve(obj)
            });
        } else if (updateQuery.email && user) {
            user.updateEmail(updateQuery.email).then(function() {
                    
                obj = {
                    status: 200,
                    message: 'Email updated / Correo actualizados'
                }
                resolve(obj)

            }).catch(function(error) {
                obj = {
                    error: error,
                    status: 400,
                    message: 'Error, cannot update email / Error, no se pudo actualizar el email'
                }
                resolve(obj);
            });
        } else {
            objError = {
                status: 400,
                message: 'Error getting user'
            }
            resolve(objError)
        } 
    });
}

deleteUser = ()  => {
    return new Promise ((resolve) => { 
        const user = auth.currentUser;

        user.delete().then(function() {
            obj = {
                status: 200,
                message: 'User deleted / Usuario borrado'
            }
            resolve(obj)
        }).catch(function(error) {
            obj = {
                error: error,
                status: 400,
                message: 'Error, cannot delete user / Error, no se pudo borrar el usuario'
            }
            resolve(obj)
        });
    });
}


module.exports = {
    signup,
    login,
    logout,
    verifyEmail,
    recoverPass,
    getUser,
    updateUser,
    deleteUser
}