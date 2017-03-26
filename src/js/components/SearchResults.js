import React from 'react';
import classNames from 'Classnames';
import Styles from '../../css/SearchResults.pcss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import GenreList from './GenreList';
import { Link } from 'react-router';

const SearchResults = (props) => {
  const imageBaseUrl = props.config.images.secure_base_url;
  const fileSize = props.config.images.logo_sizes[0];

  const results = props.results.results.map(result => {
    const path = '/movie/' + result.id;
    const date = new Date(result.release_date);
    const year = date.getFullYear();

    const genres = result.genre_ids.map(genre_id => {
      const genreName = props.genres.filter(function(genre) {
        return genre_id === genre.id;
      });
      return genreName[0];
    });

    return (
      <ReactCSSTransitionGroup transitionName="search--result" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
        <Link to={path} className={Styles.result} key={result.id}>
          <img src={imageBaseUrl + fileSize + result.poster_path}></img>
          <div className={Styles.infocontainer}>
            <span className={Styles.title}>{result.title}</span>
            <span className={Styles.date}>{`(${year})`}</span>
            <span className={Styles.genres}>
              <GenreList genres={genres} compact={true} />
            </span>
            <span className={Styles.overview}>{result.overview}</span>
          </div>
        </Link>
      </ReactCSSTransitionGroup>
    );
  });

  return (
    <ReactCSSTransitionGroup transitionName="search--results" transitionEnterTimeout={30000} transitionLeaveTimeout={30000}>
      <div className={`${Styles.container} container`}>
        {results}
      </div>
    </ReactCSSTransitionGroup>
  );
};

export default SearchResults
