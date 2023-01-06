import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import IdPersonnage from "./IdPersonnage";

function Personnage() {
    let [items, setItems] = useState(null)


    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/"+IdPersonnage())
            .then(response => response.json())

            .then(data => setItems(data))
    }, [])

    var tab = new Array();


    tab.push(

        <div className="img-perso">

            <div className="div-img">

            <a>
                {items && <img src={items.image} alt="img character"/>}
            </a>
            </div>

            <a>
                {items && <h6>{items.name}</h6>}
            </a>
            <a>
                <h6>Status :</h6>{items && <p> {items.status}</p>}
                <h6>Sexe:</h6>{items && <p>{items.gender} </p>}
                <h6> Type:</h6> {items && <p> {items.type}</p>}
                <h6> Planète d'origine:</h6>{items && <p> {items.origin.name}</p>}
                <h6> Apparition :</h6>{items && <p> {items.episode}</p>}
            </a>

        </div>
    )

    return (
        <div className="card-container">
            {tab.map((data, index) => (
                <div key={index}> {data}</div>
            ))}

        </div>

);
}

export default Personnage;
