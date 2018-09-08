const connection = require('../models/connection');
const db = connection.db();

getAll = () => {
    return new Promise ((resolve, reject) => {
        let paymentRef = db.collection('payment');
        let getAllQuery = paymentRef.get()
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
            console.log('Error getting payments', err);
            reject(err);
        });
        resolve(getAllQuery);   
    });
}

getByID = (id) => {
    return new Promise ((resolve, reject)  =>{
        let paymentRef = db.collection('payment').doc(id);
        paymentRef.onSnapshot(doc => {
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
        let paymentObj = {
           freelancer_id: body.freelancer_id,
           name: body.name,
           payment_method_id: body.payment_method_id,
           user_id: body.user_id,
           value: body.value
        }
        let paymentRef = db.collection('payment')
        paymentRef.add(paymentObj)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Payment created'
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
        let paymentRef = db.collection('payment').doc(id)
        paymentRef.update(body)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Payment updated'
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
        let paymentRef = db.collection('payment').doc(id)
        paymentRef.delete()
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Payment deleted'
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