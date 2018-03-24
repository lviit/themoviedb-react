import React from "react";
import PropTypes from "prop-types";
import Classnames from "classnames";
import { Link } from "react-router-dom";
import Styles from "./GenreList.pcss";

const GenreList = ({ genres, compact }) => {
  const genreList = genres.map(
    genre =>
      compact ? (
        <span className={`${Styles.genre} genre-${genre.id}`} key={genre.id}>
          {genre.name}
        </span>
      ) : (
        <div className={`${Styles.genre} genre-${genre.id}`}>
          <Link
            className={`${Styles.link} gradient-genre-${genre.id}--light`}
            key={genre.id}
            to={`/genres/${genre.id}`}
          >
            {genre.name}
          </Link>
        </div>
      )
  );

  const containerClasses = Classnames({
    [Styles.container]: true,
    [Styles.compact]: compact
  });

  return <div className={containerClasses}>{genreList}</div>;
};

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object),
  compact: PropTypes.bool
};

GenreList.defaultProps = {
  genres: [],
  compact: false
};

export default GenreList;
