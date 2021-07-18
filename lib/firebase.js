// lib/firebase.js
import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
   
    "apiKey": "AIzaSyD2OfB1hpXcKpMy4LCCVQ40SeOAEUGdkMI",
    "authDomain": "tengwar-tools.firebaseapp.com",
    "projectId": "tengwar-tools",
    "storageBucket": "tengwar-tools.appspot.com",
    "messagingSenderId": "378735956484",
    "appId": "1:378735956484:web:f1980e6065cde52e39db51",
    "measurementId": "G-TK3MV00HM9"

  })
}

export default firebase