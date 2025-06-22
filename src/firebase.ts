import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMFyzKercg5-AqHkH4TJsI6viIIcfyWR4",
    authDomain: "mind-collaborator.firebaseapp.com",
    projectId: "mind-collaborator",
    storageBucket: "mind-collaborator.firebasestorage.app",
    messagingSenderId: "732652188977",
    appId: "1:732652188977:web:0a7c697043936f3bbaec10"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };