import {initializeApp} from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {getAnalytics} from 'firebase/analytics';

const {
  POKER_API_KEY,
  POKER_AUTH_DOMAIN,
  POKER_PROJECT_ID,
  POKER_STORAGE_BUCKET,
  POKER_MESSAGING_SENDER_ID,
  POKER_APP_ID,
  POKER_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: POKER_API_KEY,
  authDomain: POKER_AUTH_DOMAIN,
  projectId: POKER_PROJECT_ID,
  storageBucket: POKER_STORAGE_BUCKET,
  messagingSenderId: POKER_MESSAGING_SENDER_ID,
  appId: POKER_APP_ID,
  measurementId: POKER_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
