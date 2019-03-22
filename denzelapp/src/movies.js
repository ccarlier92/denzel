import React, { Component } from 'react';

class Movie extends Component{


    constructor(props) {
        super(props);
        this.state = {
            title: '',
            link: '',
            metascore: '',
            poster:'',
            synopsis:'',
            review: ''
        }
    }
    componentDidMount() {
        fetch('http://localhost:9292/movie')
            .then(response => this.setState({
                title: response.data.title,
                link: response.data.link,
                metascore: response.data.metascore,
                poster: response.data.poster,
                synopsis: response.data.synopsis,
                review: response.data.review,
                    }),


            )

    }
    render() {
        return (
                <div>
                    <p>Titre : {this.state.title}</p>
                    <p>Synopsis :{this.state.synopsis}</p>
                    <p>Metascore : {this.state.metascore}</p>
                    <p>Poster : <img src={this.state.poster} ></img></p>
                    <p>Review : {this.state.review}</p>
                    <p>lien : <a href={this.state.link} target="_blank">{this.state.link}</a> </p>
                </div>
            );
        }

}

export default Movie;
