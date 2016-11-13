import React from 'react';
import css from '../../css/genres.css';

const GenreList = (props) => {

  const genres = props.genres.map(genre => {
    return <div className={`genre genre-${genre.id}`} key={genre.id}>{genre.name}</div>
  });

  return (
    <div className="genres">
      {genres}
    </div>
  );
};

export default GenreList;
