import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBT4OkIsG5FhTN7s1HSgqdmIdKh4spww9A",
    authDomain: "slack-clone-c57af.firebaseapp.com",
    databaseURL: "https://slack-clone-c57af.firebaseio.com",
    projectId: "slack-clone-c57af",
    storageBucket: "slack-clone-c57af.appspot.com",
    messagingSenderId: "604320643142",
    appId: "1:604320643142:web:e9bc1caaec7fe5d111f247",
    measurementId: "G-RXZ5F8YLWW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;