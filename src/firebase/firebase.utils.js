import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCFdZGK3XHJBebJZl49A9eedxAXSe5o91s",
  authDomain: "clothing-ecommerce-webapp.firebaseapp.com",
  databaseURL: "https://clothing-ecommerce-webapp.firebaseio.com",
  projectId: "clothing-ecommerce-webapp",
  storageBucket: "",
  messagingSenderId: "114777742415",
  appId: "1:114777742415:web:143ecf885819e258"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setup Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
