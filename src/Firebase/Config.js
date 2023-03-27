// Import the functionsfrom SDKs
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase web app configuration
const firebaseConfig = {
  apiKey: "AIzaSyClq7U9qsE3uNWX6_TeL48uRYOhJRvBGmA",
  authDomain: "super-gl-dbase.firebaseapp.com",
  projectId: "super-gl-dbase",
  storageBucket: "super-gl-dbase.appspot.com",
  messagingSenderId: "233071468909",
  appId: "1:233071468909:web:de1fe6247ebb577033ba64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const glDbase = getStorage(app);
const glStore = getFirestore(app);

export default { glDbase, glStore };
