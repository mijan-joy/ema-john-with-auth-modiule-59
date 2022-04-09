// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz9k33fUGOErAkN-TK_e4u7Gk-j8Ooc1o",
  authDomain: "ema-jone-simple-f3e1f.firebaseapp.com",
  projectId: "ema-jone-simple-f3e1f",
  storageBucket: "ema-jone-simple-f3e1f.appspot.com",
  messagingSenderId: "821149848373",
  appId: "1:821149848373:web:4237fc026022c88847b27c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;