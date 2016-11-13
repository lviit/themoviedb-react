import React from 'react';
import Classnames from 'classnames';
import css from '../../css/material-icons.css';
import loadercss from '../../css/loader.css';
import MovieFullCss from '../../css/movie--full.css';
import GenreList from './GenreList';
import Details from './Details';

class FullView extends React.Component {
  constructor() {
    super();
    this.state = {
      img_loaded: false,
    }
  }

  render() {
    const imageBaseUrl = this.props.config.images.secure_base_url;
    const fileSize = this.props.config.images.backdrop_sizes[3];
    const { title, tagline, overview, backdrop_path, genres, vote_average} = this.props.data;

    let classes = Classnames({
      'movie--image__full': true,
      'img__loaded': this.state.img_loaded,
    });

    return (
      <div>
        <div className="image-load-container">
          {!this.state.img_loaded && <div className="loader"></div>}
          <img onLoad={ e => this.setState({ img_loaded: true })}
            onError={ e => this.setState({ img_loaded: true })}
            className={classes}
            src={imageBaseUrl + fileSize + backdrop_path}
          />
        </div>
        <div className="container">
          <h1 className="movie--title__full">{title}</h1>
          <h2 className="movie--tagline__full">{tagline}</h2>
          <div className="movie--info__full">
            <GenreList genres={genres} />
            <Details details={this.props.data}/>
            <div className="movie--score__full">
              <i className="material-icons score-icon">star</i>
              <span className="score">{vote_average}</span>
            </div>
            <div className="movie--overview__full">
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default FullView;
