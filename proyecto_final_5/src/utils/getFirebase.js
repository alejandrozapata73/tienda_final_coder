import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZVS1hODAXwAwlERaPC4Y2wqlDfRqK6Ws",
  authDomain: "tiendageed2.firebaseapp.com",
  projectId: "tiendageed2",
  storageBucket: "tiendageed2.appspot.com",
  messagingSenderId: "1073532760177",
  appId: "1:1073532760177:web:f933ddf49d788bef256bd0",
  measurementId: "G-XVH6CF5DDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


