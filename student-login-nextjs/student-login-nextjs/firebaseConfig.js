// firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCHG-UftrS9UirbxFUeSP688JXut5Fw_s",
  authDomain: "huhe-e75b5.firebaseapp.com",
  projectId: "huhe-e75b5",
  storageBucket: "huhe-e75b5.firebasestorage.app",
  messagingSenderId: "320267974170",
  appId: "1:320267974170:web:faf02a5e3f7d0a7169c3a3",
  measurementId: "G-J13PX0T19D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
