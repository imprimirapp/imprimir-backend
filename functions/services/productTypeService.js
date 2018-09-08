const connection = require('../models/connection');
const db = connection.db();

getAll = () => {
    return new Promise ((resolve, reject) => {
        let productTypeRef = db.collection('product_type');
        let getAllQuery = productTypeRef.get()
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
            console.log('Error getting productTypes', err);
            reject(err);
        });
        resolve(getAllQuery);   
    });
}

getByID = (id) => {
    return new Promise ((resolve, reject)  =>{
        let productTypeRef = db.collection('product_type').doc(id);
        productTypeRef.onSnapshot(doc => {
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
        let productTypeObj = {
            company_type_id: body.company_type_id,
            name: body.name
        }
        let productTypeRef = db.collection('product_type')
        productTypeRef.add(productTypeObj)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'ProductType created'
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
        let productTypeRef = db.collection('product_type').doc(id)
        productTypeRef.update(body)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'ProductType updated'
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
        let productTypeRef = db.collection('product_type').doc(id)
        productTypeRef.delete()
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'ProductType deleted'
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