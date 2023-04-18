// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import * as firebase from "firebase"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBhEReM4PDb20eS9aJ1DWiiD_ACWyNsQs",
    authDomain: "listowo-7a982.firebaseapp.com",
    projectId: "listowo-7a982",
    storageBucket: "listowo-7a982.appspot.com",
    messagingSenderId: "227297084474",
    appId: "1:227297084474:web:9cc9410dae39e4ee766103",
    measurementId: "G-7GCVPDWH5V"
};

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0)
//     app = firebase.initializeApp(firebaseConfig);
// else
//     app = firebase.app();
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = firebase.auth();

// export { auth };

export const auth = getAuth(app);
export default app;