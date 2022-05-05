import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyBiLt6mLYsog3VotzNhrVdncDb56IWX1wA",
//   authDomain: "stubgenerator.firebaseapp.com",
//   projectId: "stubgenerator",
//   storageBucket: "stubgenerator.appspot.com",
//   messagingSenderId: "397207360981",
//   appId: "1:397207360981:web:e0ca3e0cbb5ca50c13595c",
//   measurementId: "G-GLX8JQGX7G"
// })
const app = firebase.initializeApp({
  apiKey: 'AIzaSyBiLt6mLYsog3VotzNhrVdncDb56IWX1wA',  // process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STOREAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDIN_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

export const auth = app.auth()
export default app