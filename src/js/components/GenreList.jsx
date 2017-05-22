import React from 'react';
import Classnames from 'classnames';
import { Link } from 'react-router';
import Styles from '../../css/genres.pcss';

const GenreList = (props) => {
  const genres = props.genres.map(genre =>
    <Link className={`${Styles.genre} genre-${genre.id}`} key={genre.id} to={`/genres/${genre.id}`}>{genre.name}</Link>);

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
  compact: false,
};

export default GenreList;
