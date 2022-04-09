import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMO7GzeWCTp832prVd6gObFzeCjH8hWBI",
  authDomain: "diseny-clone-eb5dd.firebaseapp.com",
  projectId: "diseny-clone-eb5dd",
  storageBucket: "diseny-clone-eb5dd.appspot.com",
  messagingSenderId: "760113864192",
  appId: "1:760113864192:web:9d74633ba218060fc382e5",
};

// Initialize Firebase
const firbaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firbaseApp);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(firbaseApp);

export default firebaseConfig;
