const connection = require('../models/connection');
const db = connection.db();

getAll = () => {
    return new Promise ((resolve, reject) => {
        let companyRef = db.collection('company');
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
            console.log('Error getting companies', err);
            reject(err);
        });
        resolve(getAllQuery);   
    });
}

getByID = (id) => {
    return new Promise ((resolve, reject)  =>{
        let companyRef = db.collection('company').doc(id);
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
            address: body.address,
            city: body.city,
            company_type_id: body.company_type_id,
            country: body.country,
            email: body.email,
            name: body.name,
            official_id: body.official_id,
            phone: body.phone,
            province_state: body.province_state,
            website: body.website
        }
        let companyRef = db.collection('company')
        companyRef.add(companyObj)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Company created'
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
        let companyRef = db.collection('company').doc(id)
        companyRef.update(body)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Company updated'
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
        let companyRef = db.collection('company').doc(id)
        companyRef.delete()
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Company deleted'
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