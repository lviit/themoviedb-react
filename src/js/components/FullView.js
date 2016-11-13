import React from 'react';

class FullView extends React.Component {
  constructor() {
    super();
    this.state = {
      img_loader: true,
    }
  }

  render() {
    const imageBaseUrl = this.props.config.images.secure_base_url;
    const fileSize = this.props.config.images.backdrop_sizes[3];
    const { title, tagline, overview, release_date, backdrop_path, homepage, genres, vote_average } = this.props.data;
    const genreList = genres.map(genre => {
      return <div className="genre" key={genre.id}>{genre.name}</div>
    });

    return (
      <div>
        <div className="image-load-container">
          {this.state.img_loader && <div className="loader"></div>}
          <img onLoad={ e => this.setState({ img_loader: false })}
            onError={ e => this.setState({ img_loader: false })}
            className="movie--image__full"
            src={imageBaseUrl + fileSize + backdrop_path}
          />
        </div>
        <div className="container">
          <h1 className="movie--title__full">{title}</h1>
          <h2 className="movie--tagline__full">{tagline}</h2>
          <div className="movie--info__full">
            <div>{genreList}</div>
            <div>{release_date}</div>
            <div>{homepage}</div>
            <div>{vote_average}</div>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default FullView;
