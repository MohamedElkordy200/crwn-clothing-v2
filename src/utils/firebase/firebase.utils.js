 
import { initializeApp } from "firebase/app";

import {getAuth,signInWithPopup,signInWithRedirect,GoogleAuthProvider} from 'firebase/auth' ;
// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAS-0Ofxy_AWfMi7BS7lNSRSt8gPRGV0dw",

  authDomain: "crown-clothes-e17d0.firebaseapp.com",

  projectId: "crown-clothes-e17d0",

  storageBucket: "crown-clothes-e17d0.appspot.com",

  messagingSenderId: "200262083914",

  appId: "1:200262083914:web:807ed026c981bcc82acdb3"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider=new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:'select_account'
});


export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);