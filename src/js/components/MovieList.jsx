import React from 'react';
import { Link } from 'react-router';
import Styles from '../../css/MovieList.pcss';

const MovieList = (props) => {
  const imageBaseUrl = props.config.images.secure_base_url;
  const fileSize = props.config.images.backdrop_sizes[0];

  const resultNodes = props.data.results.map((result) => {
    const path = `/movie/ ${result.id}`;
    return (
      <div className={Styles.movie} key={result.id}>
        <img src={imageBaseUrl + fileSize + result.poster_path} alt="" />
        <div className={Styles.info}>
          <h2 className={Styles.title}>{result.title}</h2>
          <Link className={Styles.link} to={path}>
            <i className="material-icons">arrow_forward</i>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div className={Styles.container}>
      {resultNodes}
    </div>
  );
};

MovieList.propTypes = {
  data: React.PropTypes.shape({
    results: React.PropTypes.array,
  }),
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
