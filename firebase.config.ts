import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAnalytics} from 'firebase/analytics';
import { getAuth,Auth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAcIdZvV6H__qV3Ady-t1h4vWIGMkkg70g",
//   authDomain: "neuromate-9a062.firebaseapp.com",
//   projectId: "neuromate-9a062",
//   storageBucket: "neuromate-9a062.appspot.com",
//   messagingSenderId: "678587059768",
//   appId: "1:678587059768:web:ea4c1a605de3cd732fa0cd",
//   measurementId: "G-3V1Q7D5356"
// };
const firebaseConfig = {
  apiKey:process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId:process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};
let analytics; let firestore;let auth:Auth;
if (firebaseConfig?.projectId) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
  auth = getAuth(app);

  // Access Firebase services using shorthand notation

  firestore = getFirestore(app);
}

export {analytics, firestore,auth};
