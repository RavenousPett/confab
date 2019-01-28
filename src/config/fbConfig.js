import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyARs9juFAl8ntl0kXZB3vDZoLziXDnzRos",
    authDomain: "confab-b8a31.firebaseapp.com",
    databaseURL: "https://confab-b8a31.firebaseio.com",
    projectId: "confab-b8a31",
    storageBucket: "confab-b8a31.appspot.com",
    messagingSenderId: "749221437257"
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
