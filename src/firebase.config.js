import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getStorage} from 'firebase/storage'
import {getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBH8RzgjggCTVuYi0aryXEnNmeDHYlH-FM",
    authDomain: "ivantoryapp.firebaseapp.com",
    databaseURL: "https://ivantoryapp-default-rtdb.firebaseio.com",
    projectId: "ivantoryapp",
    storageBucket: "ivantoryapp.appspot.com",
    messagingSenderId: "409047680439",
    appId: "1:409047680439:web:e586803d69b7a66fb51432"
  };

  const app = getApps.length>0? getApp() : initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};
