import firebase from "firebase/compat/app"; // Note the '/compat' here
import "firebase/compat/firestore"; // Adjust this line accordingly based on the Firebase services you need

const firebaseConfig = {
  apiKey: "AIzaSyDdK66SL6bmlXzYC1lEJChYffpU5-P_rK8",
  authDomain: "talesdb-asia112.firebaseapp.com",
  projectId: "talesdb-asia112",
  storageBucket: "talesdb-asia112.appspot.com",
  messagingSenderId: "965308016236",
  appId: "1:965308016236:web:70017469a59ace587b9a49",
  measurementId: "G-VTTGPBR2YL",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
