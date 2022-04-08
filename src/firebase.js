import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDVGYS1_vWiuBg57hacpirasaYvfWmlt7Q",
  authDomain: "dook-auth-development.firebaseapp.com",
  projectId: "dook-auth-development",
  storageBucket: "dook-auth-development.appspot.com",
  messagingSenderId: "318490958058",
  appId: "1:318490958058:web:dbf34c4ec39bcc3cd35f93",

  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = getAuth(firebaseConfig);

export default firebaseConfig;
