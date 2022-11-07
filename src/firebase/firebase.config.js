// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXOlQOGbkSobiilfngayCvgRdApZxsSYI",
  authDomain: "volunteer-tree.firebaseapp.com",
  projectId: "volunteer-tree",
  storageBucket: "volunteer-tree.appspot.com",
  messagingSenderId: "1079134002288",
  appId: "1:1079134002288:web:ea830b7d3b5e152f3568b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;