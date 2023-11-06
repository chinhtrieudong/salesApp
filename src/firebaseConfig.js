import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyDUxtkA6XrvbYVX1G9_HSScf9ZwdyQgDTk',
    authDomain: 'sales-goods-app.firebaseapp.com',
    databaseURL: 'https://sales-goods-app-default-rtdb.firebaseio.com',
    projectId: 'sales-goods-app',
    storageBucket: 'sales-goods-app.appspot.com',
    messagingSenderId: '426734784124',
    appId: '1:426734784124:web:8e353c5f3be650a1c7c3f9',
    measurementId: 'G-D28K5J93S8',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
