import React from 'react';
import Styles from '../../css/genres.pcss';

const GenreList = (props) => {

  const genres = props.genres.map(genre => {
    return <div className={Styles.genre +  ` genre-${genre.id}`} key={genre.id}>{genre.name}</div>
  });

  return (
    <div className="movie--genres">
      {genres}
    </div>
  );
};

export default GenreList;
