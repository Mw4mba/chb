// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export {firebase,db};