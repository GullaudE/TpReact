import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Accueil from "./Component/Accueil";
import Episode from "./Component/Episode";
import Personnage from "./Component/Personnage";
import Favoris from "./Component/Favoris";
import SignInModal from "./Component/Connexion/SignInModal";
import SignUpModal from "./Component/Inscription/SignUpModal";
import NavBar from "./Component/NavBar";
import {UserContextProvider} from "./Component/Context/UserContext";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
;



export default function App()  {



    return (

        <Router>
            <SignUpModal/>
            <SignInModal/>
            <NavBar/>
            <Routes>
                    <Route path="*" element={<Accueil/>} />
                    <Route path="/Component/Episode" element={<Episode/>}/>
                    <Route path="/Component/Personnage" element={<Personnage/> }/>
                    <Route path="/Component/Favoris" element={<Favoris/>}/>
            </Routes>
        </Router>

    );
}


