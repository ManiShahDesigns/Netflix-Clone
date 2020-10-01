import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD2xBzqiss3b7_8KSy8NxJ906Z8IxWPeFA",
    authDomain: "netflix-clone-190ec.firebaseapp.com",
    databaseURL: "https://netflix-clone-190ec.firebaseio.com",
    projectId: "netflix-clone-190ec",
    storageBucket: "netflix-clone-190ec.appspot.com",
    messagingSenderId: "44586132693",
    appId: "1:44586132693:web:92595bc5dedc24cc0eee5c"
};

const firebase = Firebase.initializeApp( config );

export { firebase }