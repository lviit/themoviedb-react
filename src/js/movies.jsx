import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
import css from '../css/style.css';

let baseUrl = 'https://api.themoviedb.org/3/';
let apiKey = 'dc4a1a30e13042657cc4081b0a16bf8f';

let MovieList = React.createClass({
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
  getMovies: function() {
    let url = baseUrl + 'discover/movie?primary_release_year=2010&sort_by=vote_average.desc&api_key='  + apiKey;
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
    this.getMovies();
  },
  render: function() {
    return (
      <div className="movies">
        <h1>Movies</h1>
        <ResultList data={this.state.data} config={this.state.config} />
      </div>
    );
  }
});

let ResultList = React.createClass({
  render: function() {
    if (this.props.data.results && this.props.config.data) {
      let imageBaseUrl = this.props.config.data.images.secure_base_url;
      let fileSize = this.props.config.data.images.backdrop_sizes[0];

      let resultNodes = this.props.data.results.map(function(result) {
        var path = '/movie/' + result.id;
        return (
          <div className="movie" key={result.id}>
            <img className="movie--image" src={imageBaseUrl + fileSize + result.poster_path}></img>
            <div className="movie--info">
              <h2 className="movie--title">{result.title}</h2>
              <p className="movie--overview">{result.overview}</p>
              <Link className="movie--link" to={path}>Read more</Link>
            </div>
          </div>
        );
      }); 
      return (
        <div className="resultList">
          {resultNodes}
        </div>
      );
    }
    else {
      return (
        <div className="resultList">
          <p>No Movies :(</p>
        </div>
      );    
    }
  }
});

export default MovieList









