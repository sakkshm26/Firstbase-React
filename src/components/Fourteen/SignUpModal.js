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
        <Button onClick={handleClick}>SignUp with Google</Button>
        <br></br>
        <div class="first_main">
          <div class="first_name">
            <h5>First Name<span id="star">*</span></h5>
            <input id="first_name" name="first" class="all_input" type="text" />
          </div>
          <div class="first_name">
            <h5>Last Name<span id="optional">(Optional)</span></h5>
            <input id="last_name" name="middle" class="all_input" type="text" />
          </div>
        </div>
        <div class="first_name">
          <h5>Email<span id="star">*</span></h5>
          <input id="email" name="first" class="all_input" type="email" />
        </div>
        <div class="first_name">
          <h5>Confirm Email<span id="star">*</span></h5>
          <input id="confirm_email" name="first" class="all_input" type="email" />
        </div>
        <div class="first_name">
          <h5>Password<span id="star">*</span></h5>
          <input id="password" name="first" class="all_input" type="password" />
        </div>
        <Button style={{color:'white'}}>  <NavLink to='/nineteen'>Signup</NavLink></Button>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal
