import React from 'react';
import Classnames from 'classnames';
import Styles from '../../css/genres.pcss';

const GenreList = (props) => {
  const genres = props.genres.map(genre =>
    <button className={`${Styles.genre} genre-${genre.id}`} key={genre.id} onClick={() => props.filterByGenre(genre.id, genre.name)}>{genre.name}</button>);

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

GenreList.propTypes = {
  genres: React.PropTypes.arrayOf(React.PropTypes.object),
  compact: React.PropTypes.bool,
};

GenreList.defaultProps = {
  genres: [],
  filterByGenre: () => null,
  compact: false,
};

export default GenreList;
