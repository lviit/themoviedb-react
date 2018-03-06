import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import WithScrollReveal from "./WithScrollReveal";

import MovieImage from "./MovieImage";
import Styles from "../../css/Tiles.pcss";

const Tiles = ({
  movies = [],
  genre,
  config: {
    images: { backdrop_sizes: imageSizes, secure_base_url: imageBaseUrl }
  }
}) => {
  const movieList = movies.map((movie, index) => {
    const size = index % 7 === 0 ? 2 : 1;

    return (
      <div className={`size-${size}`}>
        <Link className={Styles.movie} key={movie.id} to={`/movie/${movie.id}`}>
          <div
            className={[
              Styles.gradientOverlay,
              `gradient-genre-${genre}`
            ].join(" ")}
          />
          <MovieImage
            backdrop
            size={imageSizes[size]}
            imageBaseUrl={imageBaseUrl}
            path={movie.backdrop_path}
          />

          <div className={Styles.info}>
            <h3 className={Styles.title}>{movie.title}</h3>
            <div className={Styles.overview}>{`${movie.overview.substr(
              0,
              50 * size
            )}...`}</div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className={Styles.container}>{movieList}</div>;
};

Tiles.propTypes = {
  movies: React.PropTypes.arrayOf(React.PropTypes.object),
  config: React.PropTypes.shape({
    images: React.PropTypes.shape({
      backdrop_sizes: React.PropTypes.array,
      secure_base_url: React.PropTypes.string
    })
  })
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    config: state.config
  };
};

export default connect(mapStateToProps)(WithScrollReveal(Tiles, Styles.movie));
