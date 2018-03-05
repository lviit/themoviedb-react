import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import Styles from "../../css/MovieList.pcss";
import WithScrollReveal from "./WithScrollReveal";
import MovieImage from "./MovieImage";

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
  movies: React.PropTypes.arrayOf(React.PropTypes.object),
  config: React.PropTypes.shape({
    images: React.PropTypes.shape({
      backdrop_sizes: React.PropTypes.array,
      secure_base_url: React.PropTypes.string
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
