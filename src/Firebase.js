import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrsBowRxS0URSjwN6lGobvSefosw4wHls",
    authDomain: "snapdeal-728fc.firebaseapp.com",
    projectId: "snapdeal-728fc",
    storageBucket: "snapdeal-728fc.appspot.com",
    messagingSenderId: "555772086949",
    appId: "1:555772086949:web:2171d1c6f68187bc851b4c"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }