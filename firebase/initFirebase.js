import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: "shopify-challenge-1c592",
  storageBucket: "shopify-challenge-1c592.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};

function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
    console.log('Firebase is initialized')
}

export default initFirebase
