import React from 'react';
import { Link } from 'react-router';
import TextTruncate from 'react-text-truncate';
import css from '../css/style.css';
import apiConnect from './services/apiConnect';

let MovieList = React.createClass({
  getInitialState: function() {
    return {
      config: [],
      data: [],
    };
  },
  componentWillMount: function() {
    apiConnect.getConfig().then(config => {
      this.setState({
        config,
      });
    });
    apiConnect.getMovies().then(data => {
      this.setState({
        data,
      });
    });
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
    if (this.props.data.results && this.props.config.images) {
      let imageBaseUrl = this.props.config.images.secure_base_url;
      let fileSize = this.props.config.images.backdrop_sizes[0];

      let resultNodes = this.props.data.results.map(function(result) {
        var path = '/movie/' + result.id;
        return (
          <div className="movie" key={result.id}>
            <img className="movie--image" src={imageBaseUrl + fileSize + result.poster_path}></img>
            <div className="movie--info">
              <h2 className="movie--title">{result.title}</h2>
              <TextTruncate containerClassName="movie--overview" line={3} truncateText="…" text={result.overview} />
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
