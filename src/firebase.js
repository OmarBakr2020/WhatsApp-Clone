import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCJV2FCShcyRqHCaIWcenqPO-ZpwisXHhs",
    authDomain: "whatsapp-clone-24261.firebaseapp.com",
    projectId: "whatsapp-clone-24261",
    storageBucket: "whatsapp-clone-24261.appspot.com",
    messagingSenderId: "270082197335",
    appId: "1:270082197335:web:933f9ca3e0ac127a95a012",
    measurementId: "G-K5ZB1NC5KK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;