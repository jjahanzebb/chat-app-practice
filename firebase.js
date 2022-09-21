// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD9wWbrisGpKVUd5nFb6zrwn_nhC1vbIZk',
  authDomain: 'chat-app-adc67.firebaseapp.com',
  projectId: 'chat-app-adc67',
  storageBucket: 'chat-app-adc67.appspot.com',
  messagingSenderId: '275531241623',
  appId: '1:275531241623:web:90c37e3fce0617a6df71d2',
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export {db, auth};
