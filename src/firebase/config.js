// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCagFm-jUB3eFCYhl6ZkaOCyOsIBWnc65g",
  authDomain: "fbnb-3afa4.firebaseapp.com",
  projectId: "fbnb-3afa4",
  storageBucket: "fbnb-3afa4.appspot.com",
  messagingSenderId: "1009650092133",
  appId: "1:1009650092133:web:46841865bc3a16c9b55e8c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };