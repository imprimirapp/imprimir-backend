const connection = require('../models/connection');
const db = connection.db();

getAll = () => {
    return new Promise ((resolve, reject) => {
        let providerRef = db.collection('provider');
        let getAllQuery = providerRef.get()
        .then(snapshot => {
            let docArray = [];
            snapshot.forEach(doc => {
                obj = {
                    id: doc.id,
                    data: doc.data()
                }
                docArray.push(obj);
            });
            return docArray;
        })
        .catch(err => {
            console.log('Error getting providers', err);
            reject(err);
        });
        resolve(getAllQuery);   
    });
}

getByID = (id) => {
    return new Promise ((resolve, reject)  =>{
        let providerRef = db.collection('provider').doc(id);
        providerRef.onSnapshot(doc => {
            obj = {
                id: doc.id,
                data: doc.data()
            }
            resolve(obj);
        }, err => {
            console.log(`Encountered error:, ${err}`);
            reject(err);
        });

    });
     
}

post = (body) => {

    return new Promise ((resolve, reject)  =>{
        let providerObj = {
            address: body.address,
            city: body.city,
            country: body.country,
            email: body.email,
            name: body.name,
            official_id: body.official_id,
            phone: body.phone,
            province_state: body.province_state,
            score: body.score,
            website: body.website
        }
        let providerRef = db.collection('provider')
        providerRef.add(providerObj)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Provider created'
            }
            resolve(obj)   
        }, err => {
            console.log(`Encountered error:, ${err}`);
            reject(err);
        });        
    });

}

put = (id, body) => {

    return new Promise ((resolve, reject)  =>{
        let providerRef = db.collection('provider').doc(id)
        providerRef.update(body)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Provider updated'
            }
            resolve(obj)   
        }, err => {
            console.log(`Encountered error:, ${err}`);
            reject(err);
        });        
    });

}

deleteByID = (id)  => {

    return new Promise ((resolve, reject)  =>{
        let providerRef = db.collection('provider').doc(id)
        providerRef.delete()
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Provider deleted'
            }
            resolve(obj)   
        }, err => {
            console.log(`Encountered error:, ${err}`);
            reject(err);
        });        
    });

}


module.exports = {
    getAll,
    getByID,
    post,
    put,
    deleteByID
}