// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
        apiKey: "AIzaSyBDRMizaKib0nvXshdmIrdRbNry_A-x6_g",
        authDomain: "rick-morty-7f62c.firebaseapp.com",
        projectId: "rick-morty-7f62c",
        storageBucket: "rick-morty-7f62c.appspot.com",
        messagingSenderId: "350140253033",
        appId: "1:350140253033:web:bd862393fdabe7c473f3f8",
        measurementId: "G-5C8VYP1HEH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

