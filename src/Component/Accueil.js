import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect, useContext} from "react";
import {UserContext, UpdateFavoris} from "./Context/UserContext";


function getRandomNumber() {
    return Math.floor(Math.random() * 826) + 1;
}

export default function Accueil() {
    let [items, setItems] = useState(null)

    const { currentUser} = useContext(UserContext)

 /*   UpdateFavoris()*/

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
                    <button className="button-episode  mt-auto">
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