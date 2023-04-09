// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
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