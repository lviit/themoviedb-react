import React from 'react';

class FullView extends React.Component {
  constructor() {
    super();
    this.state = {
      img_loader: true,
    }
  }

  render() {
    let imageBaseUrl = this.props.config.images.secure_base_url;
    let fileSize = this.props.config.images.backdrop_sizes[3];
    let movie = this.props.data;

    return (
      <div>
        <div className="image-load-container">
          {this.state.img_loader && <div className="loader"></div>}
          <img onLoad={ e => this.setState({ img_loader: false })}
            onError={ e => this.setState({ img_loader: false })}
            className="movie--image__full"
            src={imageBaseUrl + fileSize + movie.backdrop_path}
          />
        </div>
        <h1>{movie.title}</h1>
        <h3>{movie.tagline}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
};

export default FullView;
