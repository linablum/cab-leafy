import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.EACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};
console.log("config", process.env.REACT_APP_APIKEY);
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
