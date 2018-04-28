const firebase = require("firebase");
const admin = require("firebase-admin");
const config  = require('../config/config');
const serviceAccount = require('../accountKey.json');

//Services:
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

firebase.initializeApp(serviceAccount);

//Database / Base de datos
db = () => {
  return admin.firestore();
}

//Authentication / Autenticación
auth = () => {
  return firebase.auth();
}

//Storage / Almacenamiento



module.exports = {
  db: db,
  auth: auth,
}