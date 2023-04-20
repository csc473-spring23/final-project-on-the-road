// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
 } from 'firebase/auth';

import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaiAuxOludtjvuJ2L0G2CqMzKSP7OHN6A",
  authDomain: "onetheroad-c4afe.firebaseapp.com",
  projectId: "onetheroad-c4afe",
  storageBucket: "onetheroad-c4afe.appspot.com",
  messagingSenderId: "388717518917",
  appId: "1:388717518917:web:010fc59dd0cbfff7f7432c",
  measurementId: "G-6GEPBSFHME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore();


// SIGNUP USER & LOG THEM IN
export function signup(username:string, email: string, password: string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      // Add username to Database
      const user = userCredential.user;
      console.log("User signed in", userCredential.user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
} 

// LOGIN USER
export function login(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User signed in", userCredential.user);
    })
    .catch((error) => {
      const errorMessage = error.message;
    });
}

// LOGOUT USER
export function logout() {
  signOut(auth).then(() => {
    console.log("user signed out")
  })
  .catch((error) => {
    // An error happened.
    console.log(error.message);
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("user id", uid);
    // ...
  } else {
    // User is signed out
    console.log("user is signed out")
  }
}