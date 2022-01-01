import firebase from 'firebase/compat/app';
// import firebaseAuth from 'firebase/auth/dist/index.esm';
import "firebase/compat/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCJzXDe0MQa8F6Z4C1VVq8KyXgyfM9t7yg",
    authDomain: "fir-project-d968c.firebaseapp.com",
    projectId: "fir-project-d968c",
    storageBucket: "fir-project-d968c.appspot.com",
    messagingSenderId: "688365066062",
    appId: "1:688365066062:web:d0c98f9c1ab33ecd83701f",
    measurementId: "G-0S9DN4JJW6"
  };
  
firebase.initializeApp(firebaseConfig)

export {firebase}