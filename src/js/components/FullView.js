import React from 'react';

const FullView = (props) => {
  let imageBaseUrl = props.config.images.secure_base_url;
  let fileSize = props.config.images.backdrop_sizes[3];
  let movie = props.data;
  return (
    <div>
      <img className="movie--image__full" src={imageBaseUrl + fileSize + movie.backdrop_path}></img>
      <h1>{movie.title}</h1>
      <h3>{movie.tagline}</h3>
      <p>{movie.overview}</p>
    </div>
  );
};

export default FullView;
