import * as firebase from 'firebase';

require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCiUIBspjq2oNQ-T0514O_EmwEm0-BRhbw",
    authDomain: "proyect-moms.firebaseapp.com",
    databaseURL: "https://proyect-moms.firebaseio.com",
    projectId: "proyect-moms",
    storageBucket: "proyect-moms.appspot.com",
    messagingSenderId: "302426459750",
    appId: "1:302426459750:web:a1aef0ee6c2b9e16"
  };

export const config = firebase.initializeApp(firebaseConfig);


export var db = firebase.firestore();

export default config


