import React from 'react';
import { firebase } from '../config/firebase';
// import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, getRedirectResult, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from 'react/cjs/react.development';

function SignUp() {

    /* const handleClick = () => {
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
        .then((re) => {
            console.log(re);
        })
        .catch((err) => {
            console.log(err);
        })
    } */

    /* useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if(user) {
                console.log('User signed in')
            } else{
                console.log('Signed out')
            }
        })
    }, []) */

    const handleClick = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
                console.log(user)
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div>
            <button onClick={handleClick}>Sign In</button>
        </div>
    )
}

export default SignUp
