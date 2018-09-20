const connection = require('../models/connection');
const db = connection.db();

getAll = () => {
    return new Promise ((resolve, reject) => {
        let freelancerRef = db.collection('freelancer');
        let getAllQuery = freelancerRef.get()
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
            console.log('Error getting freelancers', err);
            reject(err);
        });
        resolve(getAllQuery);   
    });
}

getByID = (id) => {
    return new Promise ((resolve, reject)  =>{
        let freelancerRef = db.collection('freelancer').doc(id);
        freelancerRef.onSnapshot(doc => {
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
        let freelancerObj = {
            email: body.email,
            fullName: body.fullName,
            membership_id: body.membership_id,
            membership_payment_id: body.membership_payment_id,
            payment_method_id: body.payment_method_id,
            points: body.points,
            score: body.score
        }
        let freelancerRef = db.collection('freelancer')
        freelancerRef.add(freelancerObj)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Freelancer created'
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
        let freelancerRef = db.collection('freelancer').doc(id)
        freelancerRef.update(body)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Freelancer updated'
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
        let freelancerRef = db.collection('freelancer').doc(id)
        freelancerRef.delete()
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Freelancer deleted'
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