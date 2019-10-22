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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(`Error creating user: ${error.message}`);
    }
  }

  return userRef;

}

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
