import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import IdPersonnage from "./IdPersonnage";

function Personnage() {
    let [personnages, setpersonnages] = useState(null)


    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/" + IdPersonnage())
            .then(response => response.json())

            .then(data => setpersonnages(data))
    }, [])

    var tab = new Array();


    tab.push(
        <div className="img-perso">

            <div className="div-img">

                <a>
                    {personnages && <img src={personnages.image} alt="img character"/>}
                </a>
            </div>

            <a>
                {personnages && <h6>{personnages.name}</h6>}
            </a>
            <a>
                <h6>Status :</h6>{personnages && <p> {personnages.status}</p>}
                <h6>Sexe:</h6>{personnages && <p>{personnages.gender} </p>}
                <h6> Type:</h6> {personnages && <p> {personnages.type}</p>}
                <h6> Planète d'origine:</h6>{personnages && <p> {personnages.origin.name}</p>}
                <h6> Apparition :</h6>{personnages && <p> {personnages.episode}</p>}
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
