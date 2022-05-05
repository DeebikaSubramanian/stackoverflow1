import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAN2h37v3TyVwN_hq2pMmwhgX521NYGYcA",
  authDomain: "stackoverflowclone-5c5c8.firebaseapp.com",
  projectId: "stackoverflowclone-5c5c8",
  storageBucket: "stackoverflowclone-5c5c8.appspot.com",
  messagingSenderId: "525657956048",
  appId: "1:525657956048:web:6472c1e0c2106be7f188d5",
  measurementId: "G-3MS45WN2WJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const provider=new GoogleAuthProvider();


// const analytics = getAnalytics(app);