// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyA5iluq95fbpLwF_SI3y9lB7woukOhAkQY",

    authDomain: "react-firestore-19703.firebaseapp.com",

    projectId: "react-firestore-19703",

    storageBucket: "react-firestore-19703.appspot.com",

    messagingSenderId: "768735540272",

    appId: "1:768735540272:web:5913236df69b740551e9f5"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default getFirestore();