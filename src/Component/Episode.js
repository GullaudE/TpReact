import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Component} from 'react';





export default class Episodes extends Component {
    state = { episodes: [], currentPage: 1 }

    componentDidMount() {
        this.fetchEpisodes()
    }

    fetchEpisodes = () => {
        fetch(`https://rickandmortyapi.com/api/episode/?page=${this.state.currentPage}`)
            .then(res => res.json())
            .then(data => this.setState({ episodes: data.results }))
    }

    handlePreviousPage = () => {
        this.setState(prevState => ({
            currentPage: prevState.currentPage - 1
        }), () => {
            this.fetchEpisodes()
        })
    }

    handleNextPage = () => {
        this.setState(prevState => ({
            currentPage: prevState.currentPage + 1
        }), () => {
            this.fetchEpisodes()
        })
    }

    render() {
        return (

            <div className="card-container">

                    {this.state.episodes.map(episode => (
                        <Episode key={episode.id} episode={episode} />

                    ))}
                <div className="div-button">
                    <div className="button-episode">
                        <button className="button-episode" onClick={this.handlePreviousPage} disabled={this.state.currentPage === 1}>Previous Page</button>
                        <button className="button-episode" onClick={this.handleNextPage} disabled={this.state.currentPage === 3}>Next Page</button>
                    </div>
                </div>

            </div>



        )
    }
}

 function Episode(props) {
    const { episode } = props
    return (

        <div class="card-episode">

                <p key={episode.id}>
                    <b>{episode.name}</b><br/>
                    {episode.episode}{" "}
                    {episode.air_date}<br/>
                </p>
        </div>


    )
}
