import React from 'react';
import css from '../../css/cast.css';

const Credits = (props) => {
  const castSize = 6;
  const cast = props.data.cast.slice(0, castSize).map(castMember => {

    const imageBaseUrl = props.config.images.secure_base_url;
    const fileSize = props.config.images.profile_sizes[1];

    return (
      <div className="cast-member" key={castMember.id}>
        <div className="cast-member--info">
          <div className="cast-member--name">{castMember.name}</div>
          <div className="cast-member--character">{castMember.character}</div>
        </div>
        <img className="cast-member--image" src={imageBaseUrl + fileSize + castMember.profile_path} />
      </div>
    );
  });
  return (
    <div className="container">
      <h2>Cast</h2>
      <div className="cast">
        {cast}
      </div>
    </div>
  );
}

export default Credits
