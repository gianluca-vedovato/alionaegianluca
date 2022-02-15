// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDR680Fy3565C0dctn1co88UEXxSa-XWjc',
  authDomain: 'aliona-e-gianluca.firebaseapp.com',
  projectId: 'aliona-e-gianluca',
  storageBucket: 'aliona-e-gianluca.appspot.com',
  messagingSenderId: '473774354141',
  appId: '1:473774354141:web:1d5b7605b2258094fcb534'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)

export default firebaseApp