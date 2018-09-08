const connection = require('../models/connection');
const db = connection.db();

getAll = () => {
    return new Promise ((resolve, reject) => {
        let userRef = db.collection('user');
        let getAllQuery = userRef.get()
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
        let userRef = db.collection('user').doc(id);
        userRef.onSnapshot(doc => {
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
        let userObj = {
            address: body.address,
            city: body.city,
            company_type_id: body.company_type_id,
            country: body.country,
            email: body.email,
            fullName: body.fullName,
            official_id: body.official_id,
            payment_method_id: body.payment_method_id,
            phone: body.phone,
            province_state: body.province_state,
            user_type_id: body.user_type_id
        }
        let userRef = db.collection('user')
        userRef.add(userObj)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'User created'
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
        let userRef = db.collection('user').doc(id)
        userRef.update(body)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'User updated'
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
        let userRef = db.collection('user').doc(id)
        userRef.delete()
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'User deleted'
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