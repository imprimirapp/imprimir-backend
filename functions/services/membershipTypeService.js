const connection = require('../models/connection');
const db = connection.db();

getAll = () => {
    return new Promise ((resolve, reject) => {
        let membershipTypeRef = db.collection('membership_type');
        let getAllQuery = membershipTypeRef.get()
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
            console.log('Error getting membershipTypes', err);
            reject(err);
        });
        resolve(getAllQuery);   
    });
}

getByID = (id) => {
    return new Promise ((resolve, reject)  =>{
        let membershipTypeRef = db.collection('membership_type').doc(id);
        membershipTypeRef.onSnapshot(doc => {
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
        let membershipTypeObj = {
            name: body.name
        }
        let membershipTypeRef = db.collection('membership_type')
        membershipTypeRef.add(membershipTypeObj)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'MembershipType created'
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
        let membershipTypeRef = db.collection('membership_type').doc(id)
        membershipTypeRef.update(body)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'MembershipType updated'
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
        let membershipTypeRef = db.collection('membership_type').doc(id)
        membershipTypeRef.delete()
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'MembershipType deleted'
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