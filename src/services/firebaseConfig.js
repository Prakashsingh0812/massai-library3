// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_ESQGHEsfGEWuRGjIv__7MKZyQJGg5V0",
    authDomain: "masai-eval3-lib3.firebaseapp.com",
    projectId: "masai-eval3-lib3",
    storageBucket: "masai-eval3-lib3.appspot.com",
    messagingSenderId: "860525698963",
    appId: "1:860525698963:web:3baf220d08ea7534ef9266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const firestore = getFirestore(app);
