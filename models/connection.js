const admin = require("firebase-admin");
const config  = require('../config/config');
const serviceAccount = require('../accountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

db = () =>{
  return admin.firestore();
} 

module.exports = {
  db: db
}