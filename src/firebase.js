import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDws9xmFF8hiy_yhNwMaQSnHJtqER5rgWM",
  authDomain: "fir-authentication-64973.firebaseapp.com",
  projectId: "fir-authentication-64973",
  storageBucket: "fir-authentication-64973.appspot.com",
  messagingSenderId: "828575517051",
  appId: "1:828575517051:web:0cad710d5efaaa992895de",
  measurementId: "G-H1BQ4T9MZV",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
