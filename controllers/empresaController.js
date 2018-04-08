const connection = require('../models/connection');
const db = connection.db();


// GETALL
getAll = () => {
    let empresaRef = db.collection('empresa');
    let getAllQuery = empresaRef.get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
    return getAllQuery;    
}

module.exports = {
    getAll: getAll
}