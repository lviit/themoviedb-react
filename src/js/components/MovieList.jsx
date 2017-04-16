import React from 'react';
import { Link } from 'react-router';
import Styles from '../../css/MovieList.pcss';
import ScrollReveal from '../ScrollReveal';

class MovieList extends React.Component {
  componentDidMount() {
    ScrollReveal.reveal(`.${Styles.movie}`, 50);
  }
  render() {
    const imageBaseUrl = this.props.config.images.secure_base_url;
    const fileSize = this.props.config.images.backdrop_sizes[0];

    const resultNodes = this.props.data.map((result) => {
      const path = `/movie/ ${result.id}`;
      return (
        <Link className={Styles.movie} key={result.id} to={path}>
          <img src={imageBaseUrl + fileSize + result.poster_path} alt="" />
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
  data: React.PropTypes.arrayOf(React.PropTypes.object),
  config: React.PropTypes.shape({
    images: React.PropTypes.shape({
      backdrop_sizes: React.PropTypes.array,
      secure_base_url: React.PropTypes.string,
    }),
  }),
};

MovieList.defaultProps = {
  data: [],
  config: {},
};

export default MovieList;
