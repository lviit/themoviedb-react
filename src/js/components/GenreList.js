import React from 'react';
import Classnames from 'Classnames';
import Styles from '../../css/genres.pcss';

const GenreList = (props) => {

  const genres = props.genres.map(genre => {
    return <div className={Styles.genre +  ` genre-${genre.id}`} key={genre.id}>{genre.name}</div>
  });

  const containerClasses = Classnames({
    [Styles.container]: true,
    [Styles.compact]: props.compact,
  });

  return (
    <div className={containerClasses}>
      {genres}
    </div>
  );
};

export default GenreList;
