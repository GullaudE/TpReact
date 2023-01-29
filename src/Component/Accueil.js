import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from "react";


function getRandomNumber() {
    return Math.floor(Math.random() * 826) + 1;
}

export default function Accueil() {
    let [items, setItems] = useState(null)


    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/" + getRandomNumber() + "," + getRandomNumber() + "," + getRandomNumber() + "," + getRandomNumber() + "," + getRandomNumber())
            .then(response => response.json())

            .then(data => setItems(data))
    }, [])

    var tab = new Array();


    for (let i = 0; i < 5; i++) {
        tab.push(





            <div className="card-container border border-dark rounded mt-1">

                <div className="div-img">
                    <a href={items && "/Component/Personnage?id="+items[i].id}>
                        {items && <img className= "img" src={items[i].image} alt="img character"/>}
                    </a>
                </div>

                <a>
                    {items && <h6>{items[i].name}</h6>}
                    {items && <p>{items[i].url}</p>}
                </a>




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



