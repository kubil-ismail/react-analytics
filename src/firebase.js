// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd-WzNR2HlpiLVIdL9m5ISYrwb-B_7YKA",
  authDomain: "react-analytics-15efe.firebaseapp.com",
  projectId: "react-analytics-15efe",
  storageBucket: "react-analytics-15efe.appspot.com",
  messagingSenderId: "1011014558180",
  appId: "1:1011014558180:web:711dc8468c441a9259e7f1",
  measurementId: "G-R9FQ3KHP0N",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const analytics = firebase.analytics();

export { analytics };
