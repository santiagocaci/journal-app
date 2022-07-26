// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBT3iICaWQy7w2UX_r8xaVUeWwAfwn46p4',
  authDomain: 'journal-app-react-7a9f3.firebaseapp.com',
  projectId: 'journal-app-react-7a9f3',
  storageBucket: 'journal-app-react-7a9f3.appspot.com',
  messagingSenderId: '979644594843',
  appId: '1:979644594843:web:6631ffd86a0e449182a43e',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const firebaseDB = getFirestore(FirebaseApp);
