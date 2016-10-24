import React from 'react';
import axios from 'axios';
import css from '../css/style.css';

let baseUrl = 'https://api.themoviedb.org/3/';
let apiKey = 'dc4a1a30e13042657cc4081b0a16bf8f';

let MovieFullView = React.createClass({
  getConfig: function() {
     let url = baseUrl + 'configuration?api_key=' + apiKey;
     axios.get(url)
    .then(function (data) {
      this.setState({config: data});
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    }.bind(this));   
  },
  getMovie: function() {
    let url = baseUrl + 'movie/' + this.props.params.splat + '?api_key='  + apiKey;
    axios.get(url)
    .then(function (data) {
      this.setState({data: data.data});
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    }.bind(this));
  },
  getInitialState: function() {
    return {config: [], data: []};
  },
  componentDidMount: function() {
    this.getConfig();
    this.getMovie();
  },
  render: function() {
    return (
      <div className="movie--fullview">
        <FullView data={this.state.data} config={this.state.config} />
      </div>
    );
  }
});

let FullView = React.createClass({
  render: function() {
    if (this.props.data && this.props.config.data) {
      let imageBaseUrl = this.props.config.data.images.secure_base_url;
      let fileSize = this.props.config.data.images.backdrop_sizes[3];
      let movie = this.props.data;
      return (
        <div>
          <img className="movie--image__full" src={imageBaseUrl + fileSize + movie.backdrop_path}></img>
          <h1>{movie.title}</h1>
          <h3>{movie.tagline}</h3>
          <p>{movie.overview}</p>
        </div>
      );
    }
    return (
      <div>No Movie :(</div>
    );
  }
});

export default MovieFullView