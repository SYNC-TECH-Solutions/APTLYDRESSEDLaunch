import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  "projectId": "studio-7558384587-98caa",
  "appId": "1:612499069843:web:9ea95553b5b5b9d1452666",
  "apiKey": "AIzaSyDNE90A2RNRkumIyNMA71ZVB-YGvQ2SVYk",
  "authDomain": "studio-7558384587-98caa.firebaseapp.com",
  "storageBucket": "studio-7558384587-98caa.firebasestorage.app",
  "messagingSenderId": "612499069843",
  "measurementId": "G-K3L3E715TR"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
