import firebase from 'firebase';

// Configure Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAMMOkh5Ls1WnsR5wCHrLVXTk5H3kBDYK0",
  authDomain: "bridem8-79cc0.firebaseapp.com",
  databaseURL: "https://bridem8-79cc0.firebaseio.com",
  projectId: "bridem8-79cc0",
  storageBucket: "bridem8-79cc0.appspot.com",
  messagingSenderId: "168735233550",
  appId: "1:168735233550:web:3f1d2281bcfefdbbb48e5f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;