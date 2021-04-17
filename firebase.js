import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCv23LnAHhEjJvTB9tWP-83O7HLSIJnKk8",
    authDomain: "rc-maps-78670.firebaseapp.com",
    // databaseURL: "https://rc-maps-78670.firebaseio.com",
    projectId: "rc-maps-78670",
    storageBucket: "rc-maps-78670.appspot.com",
    messagingSenderId: "698371722081",
    appId: "1:698371722081:web:da056b955b44f92d871320",
    measurementId: "G-JSPCS3VCSG"
};

let app;

if (firebase.apps.length === 0) { // there are no apps initialized
    app = firebase.initializeApp(firebaseConfig);
}

else {
    app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export default { db, auth }; // enable them globally
