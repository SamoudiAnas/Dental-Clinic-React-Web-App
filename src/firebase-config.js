import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getDatabase } from "@firebase/database";
import "firebase/database";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_DATABASE_ID}.firebaseapp.com`,
  projectId: `${process.env.REACT_APP_DATABASE_ID}`,
  databaseURL: `https://${process.env.REACT_APP_DATABASE_ID}-default-rtdb.europe-west1.firebasedatabase.app/`,
  storageBucket: "dental-clinic-e123f.appspot.com",
  messagingSenderId: "329435460978",
  appId: "1:329435460978:web:5ddad6270585ee7fd459eb",
  measurementId: "G-M3JYQ5BWPJ",
};

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

export const db = getFirestore();
export const databaseRef = getDatabase(app);
