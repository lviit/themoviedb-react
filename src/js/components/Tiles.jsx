import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";

import MovieImage from "./MovieImage";
import Styles from "../../css/Tiles.pcss";

const Packery = require("react-packery-component")(React);

class Tiles extends React.Component {
  componentDidMount() {
    ScrollReveal.reveal(`.${Styles.movie}`, 50);
  }
  render() {
    const {
      movies = [],
      config: {
        images: { backdrop_sizes: imageSizes, secure_base_url: imageBaseUrl }
      }
    } = this.props;

    const movieList = movies.map(movie => {
      const items = Array(1, 1, 1, 2);
      const size = items[Math.floor(Math.random() * items.length)];

      return (
        <div className={`size-${size}`}>
          <Link
            className={Styles.movie}
            key={movie.id}
            to={`/movie/${movie.id}`}
          >
            <div
              className={[
                Styles.gradientOverlay,
                `gradient-genre-${this.props.genre}`
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
              <div className={Styles.overview}>{`${movie.overview.substr(0, 50 * size)}...`}</div>
            </div>
          </Link>
        </div>
      );
    });
    return <Packery className={Styles.container}>{movieList}</Packery>;
  }
}

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

export default connect(mapStateToProps)(Tiles);
