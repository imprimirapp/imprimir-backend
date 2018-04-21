const firebase = require("firebase");
const admin = require("firebase-admin");
const config  = require('../config/config');
const serviceAccount = require('../accountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

firebase.initializeApp(serviceAccount);

db = () => {
  return admin.firestore();
}

auth = () => {
  return firebase.auth();
}

module.exports = {
  db: db,
  auth: auth
}