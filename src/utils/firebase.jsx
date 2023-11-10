// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getDatabase, ref, onValue} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCYTCA2VenslHO6Gob_C7o1a4TbPmIlhsE',
  authDomain: 'user-friendly-ai-assist.firebaseapp.com',
  databaseURL: 'https://user-friendly-ai-assist-default-rtdb.firebaseio.com',
  projectId: 'user-friendly-ai-assist',
  storageBucket: 'user-friendly-ai-assist.appspot.com',
  messagingSenderId: '56918199077',
  appId: '1:56918199077:web:952fa51b3cbfa0e3dbe8cc',
  measurementId: 'G-GC4E29KXT5',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const database = getDatabase();
