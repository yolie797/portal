

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAoxhhP-kp63xVBfR1_fZd4Scxn_JYTsx4",
  authDomain: "employee-portal-f241e.firebaseapp.com",
  projectId: "employee-portal-f241e",
  storageBucket: "employee-portal-f241e.appspot.com",
  messagingSenderId: "429637757179",
  appId: "1:429637757179:web:76bc693061630820c8a85e",
  measurementId: "G-T0F61F41K2"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebaseApp.auth();


export {auth}
export default db;
