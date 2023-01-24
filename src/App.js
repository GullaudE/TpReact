import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from "./Component/Accueil";
import Episode from "./Component/Episode";
import Personnage from "./Component/Personnage";
import Favoris from "./Component/Favoris";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";


function App()  {



    return (

        <Router>
            <div className="App">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <a href="/">
                                <img
                                    src="/asset/image/RickMorty.png"
                                    width="60"
                                    height="60"
                                    alt="Rick&Morty"
                                />
                            </a>
                        </Navbar.Brand>
                        <Navbar.Brand>Rick & Morty</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">


                            <Nav className="NavBar">
                                <Nav.Link href="/Component/Episode">Episodes</Nav.Link>
                                <Nav.Link href="/Component/Favoris">Favoris</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>

                    </Container>
                </Navbar>




                <Routes>
                    <Route path="*" element={<Accueil/>} />
                    <Route path="/Component/Episode" element={<Episode/>}/>
                    <Route path="/Component/Personnage" element={<Personnage/> }/>
                    <Route path="/Component/Favoris" element={<Favoris/>}/>


                </Routes>



            </div>
        </Router>
    );
}
export default App;

