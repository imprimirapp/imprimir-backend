const connection = require('../models/connection');
const db = connection.db();

getAll = () => {
    return new Promise ((resolve, reject) => {
        let userTypeRef = db.collection('user_type');
        let getAllQuery = userTypeRef.get()
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
            console.log('Error getting companies', err);
            reject(err);
        });
        resolve(getAllQuery);   
    });
}

getByID = (id) => {
    return new Promise ((resolve, reject)  =>{
        let userTypeRef = db.collection('user_type').doc(id);
        userTypeRef.onSnapshot(doc => {
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
        let userTypeObj = {
            name: body.name
        }
        let userTypeRef = db.collection('user_type')
        userTypeRef.add(userTypeObj)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'UserType created'
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
        let userTypeRef = db.collection('user_type').doc(id)
        userTypeRef.update(body)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'UserType updated'
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
        let userTypeRef = db.collection('user_type').doc(id)
        userTypeRef.delete()
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'UserType deleted'
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