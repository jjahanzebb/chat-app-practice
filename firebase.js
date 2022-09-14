// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgjSJEAfrkvPFt026Zcs6-uE3yL5pQs2Y',
  authDomain: 'chat-app-prac-9343b.firebaseapp.com',
  projectId: 'chat-app-prac-9343b',
  storageBucket: 'chat-app-prac-9343b.appspot.com',
  messagingSenderId: '539154875202',
  appId: '1:539154875202:web:078d7058efbf73dd9f3edb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export default {app, auth, db};
