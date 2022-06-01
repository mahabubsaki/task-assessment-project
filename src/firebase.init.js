// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCp4k1NfL6V7XSzGnBQ9BsAEXHwIE8LVZ0",
    authDomain: "simple-project-dc079.firebaseapp.com",
    projectId: "simple-project-dc079",
    storageBucket: "simple-project-dc079.appspot.com",
    messagingSenderId: "950236931879",
    appId: "1:950236931879:web:dfc4126f88369455622b02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth