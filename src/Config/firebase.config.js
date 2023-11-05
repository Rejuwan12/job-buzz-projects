// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB8XaM38u5PFVXsw4958GKy_BPEJHPWIg",
  authDomain: "job-buzz-projects.firebaseapp.com",
  projectId: "job-buzz-projects",
  storageBucket: "job-buzz-projects.appspot.com",
  messagingSenderId: "328592700349",
  appId: "1:328592700349:web:12279a071268979de498d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;