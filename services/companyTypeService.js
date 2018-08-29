const connection = require('../models/connection');
const db = connection.db();

getAll = () => {
    return new Promise ((resolve, reject) => {
        let companyRef = db.collection('company_type');
        let getAllQuery = companyRef.get()
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
            console.log('Error getting company types', err);
            reject(err);
        });
        resolve(getAllQuery);   
    });
}

getByID = (id) => {
    return new Promise ((resolve, reject)  =>{
        let companyRef = db.collection('company_type').doc(id);
        companyRef.onSnapshot(doc => {
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
        let companyObj = {
            name: body.name
        }
        let companyRef = db.collection('company_type')
        companyRef.add(companyObj)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Company Type created'
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
        let companyRef = db.collection('company_type').doc(id)
        companyRef.update(body)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Company Type updated'
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
        let companyRef = db.collection('company_type').doc(id)
        companyRef.delete()
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Company Type deleted'
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