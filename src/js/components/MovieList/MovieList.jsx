import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import Styles from "./MovieList.pcss";
import WithScrollReveal from "@utils/WithScrollReveal";
import MovieImage from "../MovieImage";

const MovieList = ({
  movies,
  config: {
    images: { backdrop_sizes: imageSizes, secure_base_url: imageBaseUrl }
  }
}) => {
  const movieList = movies.map(movie => (
    <Link className={Styles.movie} key={movie.id} to={`/movie/${movie.id}`}>
      <MovieImage
        poster
        size={imageSizes[0]}
        imageBaseUrl={imageBaseUrl}
        path={movie.poster_path}
      />
      <div className={Styles.info}>
        <h3 className={Styles.title}>{movie.title}</h3>
      </div>
    </Link>
  ));
  return <div className={Styles.container}>{movieList}</div>;
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  config: PropTypes.shape({
    images: PropTypes.shape({
      backdrop_sizes: PropTypes.array,
      secure_base_url: PropTypes.string
    })
  })
};

MovieList.defaultProps = {
  movies: [],
  config: {}
};

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps, config: state.config };
};

export default connect(mapStateToProps)(
  WithScrollReveal(MovieList, Styles.movie)
);
