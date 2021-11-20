import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyAxsJEhOc0JBa-js8zERj51Q-2calAP5x4",
  authDomain: "formbio-7925e.firebaseapp.com",
  databaseURL: "https://formbio-7925e-default-rtdb.firebaseio.com",
  projectId: "formbio-7925e",
  storageBucket: "formbio-7925e.appspot.com",
  messagingSenderId: "307867831317",
  appId: "1:307867831317:web:be50593b6a7fca7e57121c",
  measurementId: "G-M81RRRYZMF"
};

 if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
 }

 export default firebase;
