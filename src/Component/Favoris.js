import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";

export default function Favoris() {
    const { currentUser } = useContext(UserContext);

    if (!currentUser) {
        return (
            <div>
                <div className="Favoris">
                    <h1>Vous devez vous connecter afin d'accéder à la page Favoris</h1>
                </div>

        </div>
        );
    }

    return (
        <div>
            <div className="Favoris">
                <h1>Il n'y a pas de favoris</h1>
            </div>

            <div className="div-button-episode">
                <a href="/Component/Episode">
                    <button className="button-episode">Episodes</button>
                </a>
            </div>
        </div>
    );
}
