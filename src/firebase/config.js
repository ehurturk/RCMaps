import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCv23LnAHhEjJvTB9tWP-83O7HLSIJnKk8",
  authDomain: "rc-maps-78670.firebaseapp.com",
  databaseURL: "https://rc-maps-78670.firebaseio.com",
  projectId: "rc-maps-78670",
  storageBucket: "rc-maps-78670.appspot.com",
  messagingSenderId: "698371722081",
  appId: "1:698371722081:web:da056b955b44f92d871320",
  measurementId: "G-JSPCS3VCSG"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

const EventsDB = db.collection("Events");

export { firebase, EventsDB };
