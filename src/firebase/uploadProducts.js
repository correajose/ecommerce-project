const admin = require('firebase-admin');
const serviceAccount = require('./key_service_account.json');
const data = require('./data.json');
const collectionName = 'products';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

if (data && (typeof data === "object")) {
Object.keys(data).forEach(docKey => {
    
    firestore.collection(collectionName).doc(docKey).set(data[docKey])
    .then((resp) => {
        console.log("Document "+ docKey + " successfully written.");
    })
    .catch((err) => {
        console.error("Error writing " + docKey + " document: ", err);
    });
});
};