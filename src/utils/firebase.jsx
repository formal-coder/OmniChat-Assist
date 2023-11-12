// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getDatabase, ref, onValue} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'api-key-here',
  authDomain: 'firebaseAuth',
  databaseURL: 'firebaseDatabase',
  projectId: 'firebaseProject',
  storageBucket: 'firebaseBucket',
  messagingSenderId: 'firebaseMsgSender',
  appId: 'firebaseAppId',
  measurementId: 'firebaseMeasurementId',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const database = getDatabase();
