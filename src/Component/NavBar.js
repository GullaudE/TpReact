import {Container, Nav, Navbar} from "react-bootstrap";
import {UserContext} from "./Context/UserContext";
import React, {useContext} from "react";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {auth} from "./Firebase"

export default function NavBar(){

    const {toggleModals, currentUser} = useContext(UserContext)
    const navigate = useNavigate()

    const logOut = async () => {
        try {
            await signOut(auth)
            navigate("/")

        }catch {
            alert(" Déconnexion imposible")

        }

    }

    return (
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
                            <Nav.Link href="/Component/Episode">
                                Episodes
                            </Nav.Link>

                        {currentUser && (
                            <Nav.Link href="/Component/Favoris">
                                Favoris
                            </Nav.Link>
                        )}
                            <div>
                                {!currentUser && (
                                <button

                                    onClick={() => toggleModals("signUp")}
                                    className="button-log">
                                    Inscription
                                </button>
                                )}
                                {!currentUser && (
                                <button
                                    onClick={() => toggleModals("signIn")}
                                    className="button-log ms-2">
                                    Connexion
                                </button>
                                )}
                                {currentUser && (
                                <button
                                    onClick={logOut}
                                    className="button-log ms-2">
                                    Déconnexion
                                </button>)}
                            </div>

                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>
    )

}