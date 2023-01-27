/*
import React from 'react';

import './SignInModal.css';

 function Connexion() {
    return(

        <div className="card-container">

                <form className="conn-div">
                    <h1>Connexion</h1>
                    <label>
                        <p>Email</p>
                        <input className="conn-inp" type="text" />
                    </label><br/>
                    <label>
                        <p>Password</p>
                        <input className="conn-inp" type="password" />
                    </label>
                    <div>
                        <br/><button className="button-episode"  type="submit">Submit</button>
                    </div>

                    <br/>


                </form >

        </div>
    )
}
export default Connexion*/
/*import React, { useState } from "react";
import firebase from "/node_modules/firebase/app";
import "/node_modules/firebase/auth";

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;

const firebaseConfig = {
    apiKey: "AIzaSyC9V4isL8WZBtgv9iD88VElhpg-kBzS7jA",
    authDomain: "rick-morty-6fd5a.firebaseapp.com",
    projectId: "rick-morty-6fd5a",
    storageBucket: "rick-morty-6fd5a.appspot.com",
    messagingSenderId: "200460146643",
    appId: "1:200460146643:web:1a9a28f645fe06549d8126",
    measurementId: "G-QYBB53XHMN"
};

firebase.initializeApp(firebaseConfig);

const Auth = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSignup, setIsSignup] = useState(true);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!emailRegex.test(formData.email)) {
            setError("Invalid email address");
            setIsLoading(false);
            return;
        }

        if (!passwordRegex.test(formData.password)) {
            setError("Invalid password, must contain at least 8 characters, one uppercase letter, one special character and one number.");
            setIsLoading(false);
            return;
        }

        try {
            await firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password);
            setError(null);
        } catch (err) {
            setError(err.message);
        }

        setIsLoading(false);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await firebase.auth().signInWithEmailAndPassword(formData.email, formData.password);
            setError(null);
        } catch (err) {
            setError(err.message);
        }

        setIsLoading(false);
    };

    return (
        <div>
            {error && <p>{error}</p>}
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <form>
                    <label>
                        Email:
                        <input type="email" name="email" onChange={handleChange} value={formData.email} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" name="password" onChange={handleChange} value={formData.password} />
                    </label>
                    <br />
                    {isSignup ? (
                        <button onClick={handleSignup}>Sign up</button>
                    ) : (
                        <button onClick={handleLogin}>Login</button>
                    )}
                    <button onClick={() => setIsSignup(!isSignup)}>
                        Switch to {isSignup ? "Login" : "Signup"}
                    </button>
                </form>
            )}
        </div>
    );
};

export default Auth;*/

