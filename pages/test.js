// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../lib/firebase';
import AuthForm from '../components/auth/AuthForm'
import { Box } from '@chakra-ui/react'

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/demo',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: false
      }
  ],
};



async function authenticateUser(email, password, isLogin) {
  try {
    const user = isLogin
      ? await firebase.auth.signInWithEmailAndPassword(email, password)
      : await firebase.auth.createUserWithEmailAndPassword(email, password);
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}


function SignInScreen() {
  return (
    <Box>
    <AuthForm />
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>

    </Box>

    
  );
}

export default SignInScreen