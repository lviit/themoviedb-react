import React from 'react';
import { connect } from "react-redux";

import { Link } from 'react-router-dom';
import Styles from '../../css/MovieList.pcss';
import ScrollReveal from '../ScrollReveal';
import MovieImage from './MovieImage';

class MovieList extends React.Component {
  componentDidMount() {
    ScrollReveal.reveal(`.${Styles.movie}`, 50);
  }
  render() {
    const resultNodes = this.props.movies.results.map((result) => {
      const path = `/movie/${result.id}`;
      return (
        <Link className={Styles.movie} key={result.id} to={path}>
          <MovieImage
            poster
            size={this.props.config.images.backdrop_sizes[0]}
            imageBaseUrl={this.props.config.images.secure_base_url}
            path={result.poster_path}
          />
          <div className={Styles.info}>
            <h3 className={Styles.title}>{result.title}</h3>
          </div>
        </Link>
      );
    });
    return (
      <div className={Styles.container}>
        {resultNodes}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: React.PropTypes.arrayOf(React.PropTypes.object),
  config: React.PropTypes.shape({
    images: React.PropTypes.shape({
      backdrop_sizes: React.PropTypes.array,
      secure_base_url: React.PropTypes.string,
    }),
  }),
};

MovieList.defaultProps = {
  movies: [],
  config: {},
};

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps, config: state.config };
};

export default connect(mapStateToProps)(MovieList);
