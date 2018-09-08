const connection = require('../models/connection');
const db = connection.db();

getAll = () => {
    return new Promise ((resolve, reject) => {
        let packRef = db.collection('pack');
        let getAllQuery = packRef.get()
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
            console.log('Error getting packs', err);
            reject(err);
        });
        resolve(getAllQuery);   
    });
}

getByID = (id) => {
    return new Promise ((resolve, reject)  =>{
        let packRef = db.collection('pack').doc(id);
        packRef.onSnapshot(doc => {
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
        let packObj = {
            name: body.name,
            pack_type_id: body.pack_type_id,
            payment_id: body.payment_id,
            user_id: body.user_id
        }
        let packRef = db.collection('pack')
        packRef.add(packObj)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Pack created'
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
        let packRef = db.collection('pack').doc(id)
        packRef.update(body)
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Pack updated'
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
        let packRef = db.collection('pack').doc(id)
        packRef.delete()
        .then(doc => {
            obj = {
                id: doc.id,
                status: 200,
                message: 'Pack deleted'
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