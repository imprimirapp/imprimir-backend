const connection = require('../models/connection');
const db = connection.db();

getAll = () => {
    return new Promise ((resolve, reject) => {
        let productRef = db.collection('product');
        let getAllQuery = productRef.get()
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
            console.log('Error getting products', err);
            reject(err);
        });
        resolve(getAllQuery);   
    });
}

getByID = (id) => {
    return new Promise ((resolve, reject)  =>{
        let productRef = db.collection('product').doc(id);
        productRef.onSnapshot(doc => {
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
        let productObj = {
           design_id: body.design_id,
           name: body.name,
           payment_id: body.payment_id,
           product_type_id: body.product_type_id,
           provider_id: body.provider_id,
           user_id: body.user_id
        }
        let productRef = db.collection('product')
        productRef.add(productObj)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Product created'
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
        let productRef = db.collection('product').doc(id)
        productRef.update(body)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Product updated'
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
        let productRef = db.collection('product').doc(id)
        productRef.delete()
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Product deleted'
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