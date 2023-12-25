import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMch0ZmSuzD_OZLHmRzTj80K_MRtV-CaA",
  authDomain: "e-commerce-react-462fd.firebaseapp.com",
  projectId: "e-commerce-react-462fd",
  storageBucket: "e-commerce-react-462fd.appspot.com",
  messagingSenderId: "11429831588",
  appId: "1:11429831588:web:473638c9ba3d303ce4d731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;