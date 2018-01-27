import React from 'react';
import { Link } from 'react-router';
import TextTruncate from 'react-text-truncate';
import ScrollReveal from '../ScrollReveal';
import MovieImage from './MovieImage';
import Styles from '../../css/Tiles.pcss';

const Packery = require('react-packery-component')(React);

class Tiles extends React.Component {
  componentDidMount() {
    ScrollReveal.reveal(`.${Styles.movie}`, 50);
  }
  render() {
    const imageBaseUrl = this.props.config.images.secure_base_url;
    const packeryOptions = {};

    const resultNodes = this.props.movies.results.map((result) => {
      const items = Array(1, 1, 1, 2);
      const size = items[Math.floor(Math.random()*items.length)];
      const fileSize = this.props.config.images.backdrop_sizes[size];
      const path = `/movie/${result.id}`;
      return (
        <div className={`size-${size}`}>
          <Link className={Styles.movie} key={result.id} to={path}>
            <div className={[Styles.gradientOverlay, `gradient-genre-${this.props.genre}`].join(' ')} />
            <MovieImage
              backdrop
              size={this.props.config.images.backdrop_sizes[size]}
              imageBaseUrl={imageBaseUrl}
              path={result.backdrop_path}
            />
            <div className={Styles.info}>
              <h3 className={Styles.title}>{result.title}</h3>
              <TextTruncate
                containerClassName={Styles.overview}
                line={size}
                truncateText="…"
                text={result.overview}
              />
            </div>
          </Link>
        </div>
      );
    });
    return (
      <Packery className={Styles.container} options={packeryOptions}>
        {resultNodes}
      </Packery>
    );
  }
}

Tiles.propTypes = {
  movies: React.PropTypes.arrayOf(React.PropTypes.object),
  config: React.PropTypes.shape({
    images: React.PropTypes.shape({
      backdrop_sizes: React.PropTypes.array,
      secure_base_url: React.PropTypes.string,
    }),
  }),
};

Tiles.defaultProps = {
  movies: [],
  config: {},
};

export default Tiles;
