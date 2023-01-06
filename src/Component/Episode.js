import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Component} from 'react';


class Episode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://rickandmortyapi.com/api/episode/?page=1")

            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result["results"]
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="card-container">

                    <div className="div-button">
                        <a href="/Component/Episode">
                            <button className="button-episode" >1</button>
                        </a>
                        <span>
                        <a href="/Component/Episode2">
                            <button className="button-episode">2</button>
                        </a>
                        </span>
                        <a href="/Component/Episode3">
                            <button className="button-episode">3</button>
                        </a>

                    </div>


                    {items.map(item => (
                            <div className="card">
                                <p key={item.id}>
                                    <b>{item.name}</b><br/>
                                    {item.episode}{" "}
                                    {item.air_date}<br/>

                                </p>



                            </div>
                        ))}

                </div>
            );
        }
    }
}
export default Episode;
