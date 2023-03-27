// Import the functionsfrom SDKs
import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage';

// Firebase web app configuration
const firebaseConfig = {
  apiKey: "AIzaSyA39EQlLq-CTVueqc7kVgepBdXdhrjmjOo",
  authDomain: "gl-dbase.firebaseapp.com",
  projectId: "gl-dbase",
  storageBucket: "gl-dbase.appspot.com",
  messagingSenderId: "460570026363",
  appId: "1:460570026363:web:23fd4545c351962bfa5dde"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
let glDbase = firebase.storage();
let glStore = firebase.firestore();
const uploadTime = firebase.firestore.FieldValue.serverTimestamp;

export { glDbase, glStore, uploadTime };
