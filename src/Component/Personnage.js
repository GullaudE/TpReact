import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import IdPersonnage from "./IdPersonnage";

export default function Personnage() {
    let [personnages, setpersonnages] = useState(null)


    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/" + IdPersonnage())
            .then(response => response.json())

            .then(data => setpersonnages(data))
    }, [])

    var tab = new Array();


    tab.push(
        <div className="div-perso ">

                <div className="div-img-pers">
                    {personnages && <img  className="img-perso"
                        src={personnages.image} alt="img character"/>}
                </div>

                <a>
                    <div className="text-center">
                        {personnages && <h1>{personnages.name}</h1>}

                        <h6>Status :</h6>{personnages && <p> {personnages.status}</p>}
                        <h6>Sexe:</h6>{personnages && <p>{personnages.gender} </p>}
                        <h6> Type:</h6> {personnages && <p> {personnages.type}</p>}
                        <h6> Planète d'origine:</h6>{personnages && <p> {personnages.origin.name}</p>}
                        <h6> Apparition :</h6>{personnages && <p> {personnages.episode}</p>}
                    </div>
                </a>

        </div>
    )

    return (
        <div>
            {tab.map((data, index) => (
                <div key={index}> {data}</div>
            ))}

        </div>

    );
}
