import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect, useContext} from "react";
import {UserContext} from "./Context/UserContext";
import {db} from "./Firebase";

function getRandomNumber() {
    return Math.floor(Math.random() * 826) + 1;
}

export default function Accueil() {
    let [items, setItems] = useState(null)
    let [favorites, setFavorites] = useState([]);

    const { currentUser} = useContext(UserContext)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const handleAddToFavorites = (characterId) => {
        db.collection("favorites").add({
            characterId: characterId,
            userId: currentUser.uid
        })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/" + getRandomNumber() + "," + getRandomNumber() + "," + getRandomNumber() + "," + getRandomNumber() + "," + getRandomNumber())
            .then(response => response.json())

            .then(data => setItems(data))
    }, [])

    var tab = new Array();

    for (let i = 0; i < 5; i++) {
        tab.push(

            <div className="card-container text-center w-auto shadow border  rounded mt-1">

                <div className="div-img">
                    <a href={items && "/Component/Personnage?id="+items[i].id}>
                        {items && <img className= "img" src={items[i].image} alt="img character"/>}
                    </a>
                </div>

                    <div className="p-4" >
                        <a>
                        {items && <h6>{items[i].name}</h6>}
                        {items && <p>{items[i].status}</p>}
                         </a>
                    </div>

                {currentUser && (
                    <button className="button-episode  mt-auto" onClick={() => handleAddToFavorites(items[i].id)}>
                        Ajouter aux favoris
                    </button>
                )}

            </div>

        )
    }
    return (
        <div className="card-container">

            {tab.map((data, index) => (
                <div key={index}> {data}</div>
            ))}
        </div>
    );
}