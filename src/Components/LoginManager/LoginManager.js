import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

export const signInFrameWork =() => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const {displayName , email, photoURL} =  result.user;
    const user = {
      name: displayName,
      email: email,
      imgURL: photoURL,
      isSignIn: true
    };
    return user;
  }).catch((error) => {
    console.log(error.message);
  });
};

export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();

  return firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    const {displayName , email, photoURL} =  result.user;
    const user = {
      name: displayName,
      email: email,
      imgURL: photoURL,
      isSignIn: true
    };
    return user;
  })
  .catch((err) => {
    console.log(err);
  });
};

export const signOut = () =>{
  return firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    
  });
};