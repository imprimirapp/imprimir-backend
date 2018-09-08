const connection = require('../models/connection');
const db = connection.db();

getAll = () => {
    return new Promise ((resolve, reject) => {
        let paymentMethodRef = db.collection('payment_method');
        let getAllQuery = paymentMethodRef.get()
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
            console.log('Error getting paymentMethods', err);
            reject(err);
        });
        resolve(getAllQuery);   
    });
}

getByID = (id) => {
    return new Promise ((resolve, reject)  =>{
        let paymentMethodRef = db.collection('payment_method').doc(id);
        paymentMethodRef.onSnapshot(doc => {
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
        let paymentMethodObj = {
           commercial_name: body.commercial_name,
           is_cc: body.is_cc,
           last_four: body.last_four,
           name: body.name
        }
        let paymentMethodRef = db.collection('payment_method')
        paymentMethodRef.add(paymentMethodObj)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'PaymentMethod created'
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
        let paymentMethodRef = db.collection('payment_method').doc(id)
        paymentMethodRef.update(body)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'PaymentMethod updated'
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
        let paymentMethodRef = db.collection('payment_method').doc(id)
        paymentMethodRef.delete()
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'PaymentMethod deleted'
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