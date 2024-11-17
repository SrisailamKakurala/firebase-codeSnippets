import { initializeApp } from 'firebase/app'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbSjyhXY_T5d5XdSmxsvP_TjvwIjb4bBs",
    authDomain: "fir-practice-46eb2.firebaseapp.com",
    projectId: "fir-practice-46eb2",
    storageBucket: "fir-practice-46eb2.firebasestorage.app",
    messagingSenderId: "508182483532",
    appId: "1:508182483532:web:6bb35c282a9a0b669e9ae9",
    databaseURL: "https://fir-practice-46eb2-default-rtdb.asia-southeast1.firebasedatabase.app/"
};


// initialize firebase
export const app = initializeApp(firebaseConfig)

