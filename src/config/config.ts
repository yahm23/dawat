import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';

export const config = {
    firebase: {
        apiKey: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_API_KEY,
        appId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_ID,
        authDomain: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_AUTH_DOMAIN,
        messagingSenderId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        projectId: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_REACT_APP_FIREBASE_STORAGE_BUCKET,
        measurementId: process.env.NEXT_PUBLIC_REACT_APP_MEASUREMENT_ID,
    }
}

export const firebaseApp = initializeApp(config.firebase);
export const auth = getAuth(firebaseApp);