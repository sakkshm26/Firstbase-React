import React from 'react'
import { Modal, Button, CloseButton,Nav } from 'react-bootstrap'
import "./SignUpModal.css";
import { firebase } from '../../config/firebase';
// import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, getRedirectResult, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from 'react/cjs/react.development';
import { NavLink } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {

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
    <Modal
      {...props}

      dialogClassName="modal-50w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Body style={{ backgroundColor: 'black' }}>
        <CloseButton closebutton variant="white" /><br></br>
        <div className="container">
        <div className="main_box">
          <div className="first_part">
            <div className="heading">
              <h1>Create Account</h1>
            </div>
            <div className="cross_mark">
              <p>❌</p>
            </div>
          </div>
          <div className="google_button">
            <button onClick={handleClick}><img src="Images/icons8-google-48.png" /><a id="decorate1" href="#">Sign Up With Google</a></button>
          </div>
          <h3><span>or continue with</span></h3>
          <form action>
            <div className="second_part">
              <div className="first_name">
                <input className="all_input" type="text" name="firstname" placeholder="First Name" />
              </div>
              <div className="last_name">
                <input className="all_input" type="text" name="lastname" placeholder="Last Name" />
              </div>
            </div>
            <div className="third_part">
              <div className="email_name top">
                <h5>Email</h5>
                <input className="down_input" type="text" />
              </div>
              <div className="email_name">
                <h5>Confirm Email</h5>
                <input className="down_input" type="text" />
              </div>
              <div className="email_name">
                <h5>Password</h5>
                <input className="down_input" type="text" />
              </div>
            </div>
            <div className="check_box">
              <div className="check">
                <input type="checkbox" name id />
              </div>
              <div className="info">
                <p>By continue, you agree to Firstbase's <a href> Terms of Service</a> and <a href> Privacy Policy.</a></p>
              </div>
            </div>
            <div className="end">
              <div className="create_button">
                <button type="submit"><NavLink to='/nineteen'>Create Account</NavLink></button>
              </div>
              <div className="para">
                <p>Already have an account? <NavLink to='/nineteen'>Signup</NavLink></p>
              </div>
            </div>
          </form>
        </div>
      </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal
