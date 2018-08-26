const firebase = require("firebase");
const admin = require("firebase-admin");
const serviceAccount = require('../firebase.json');

//Services
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "imprimir-backend.appspot.com"
});

firebase.initializeApp(serviceAccount);

//Database 
db = () => {
  return admin.firestore();
}

//Authentication 
/*auth = () => {
  return firebase.auth();
}*/

//Admin Auth 
adminAuth = () => {
  return admin.auth();
}

//Storage 
storage = () => {
  return admin.storage();
}


module.exports = {
  db: db,
  //auth: auth,
  adminAuth: adminAuth,
  storage: storage
}