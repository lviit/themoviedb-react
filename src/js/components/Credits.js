import React from 'react';
import css from '../../css/cast.pcss';

const Credits = (props) => {
  const castSize = 6;
  const imageBaseUrl = props.config.images.secure_base_url;
  const fileSize = 'w264_and_h264_bestv2';

  const cast = props.data.cast.slice(0, castSize).map(castMember => {
    return (
      <div className="cast-member" key={castMember.id}>
        <img className="cast-member--image" src={imageBaseUrl + fileSize + castMember.profile_path} />
        <div className="cast-member--name">{castMember.name}</div>
        <div className="cast-member--character">{castMember.character}</div>
      </div>
    );
  });
  return (
    <div className="section section__light">
      <div className="container">
        <h2 className="section--title">Cast</h2>
        <div className="cast">
          {cast}
        </div>
      </div>
    </div>
  );
}

export default Credits
