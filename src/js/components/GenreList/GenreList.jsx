import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import { Link } from 'react-router-dom';
import Styles from './GenreList.pcss';

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
  genres: PropTypes.arrayOf(PropTypes.object),
  compact: PropTypes.bool,
};

GenreList.defaultProps = {
  genres: [],
  compact: false,
};

export default GenreList;
