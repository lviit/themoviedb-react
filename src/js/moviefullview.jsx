import React from 'react';
import css from '../css/style.css';
import apiConnect from './services/apiConnect';

let MovieFullView = React.createClass({
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
    apiConnect.getMovieFullview(this.props.params.splat).then(data => {
      this.setState({
        data,
      });
    });
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
    if (this.props.data && this.props.config.images) {
      let imageBaseUrl = this.props.config.images.secure_base_url;
      let fileSize = this.props.config.images.backdrop_sizes[3];
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
