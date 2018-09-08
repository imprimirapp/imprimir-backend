const connection = require('../models/connection');
const db = connection.db();

getAll = () => {
    return new Promise ((resolve, reject) => {
        let packTypeRef = db.collection('pack_type');
        let getAllQuery = packTypeRef.get()
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
            console.log('Error getting packTypes', err);
            reject(err);
        });
        resolve(getAllQuery);   
    });
}

getByID = (id) => {
    return new Promise ((resolve, reject)  =>{
        let packTypeRef = db.collection('pack_type').doc(id);
        packTypeRef.onSnapshot(doc => {
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
        let packTypeObj = {
            name: body.name
        }
        let packTypeRef = db.collection('pack_type')
        packTypeRef.add(packTypeObj)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'PackType created'
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
        let packTypeRef = db.collection('pack_type').doc(id)
        packTypeRef.update(body)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'PackType updated'
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
        let packTypeRef = db.collection('pack_type').doc(id)
        packTypeRef.delete()
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'PackType deleted'
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