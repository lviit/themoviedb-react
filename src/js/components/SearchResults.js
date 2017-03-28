import React from 'react';
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

    const genres = props.genres.filter(genre => {
      const match = result.genre_ids.filter(genre_id => {
        return genre_id === genre.id;
      });
      return match[0] === genre.id;
    });

    return (
      <Link to={path} className={Styles.result} key={result.id}     onClick={props.toggleSearchBox.bind(this)}>
        <img src={imageBaseUrl + fileSize + result.poster_path}></img>
        <div className={Styles.infocontainer}>
          <span className={Styles.title}>{result.title}</span>
          <span className={Styles.date}>{`(${year})`}</span>
          <span className={Styles.genres}>
            {genres && <GenreList genres={genres} compact={true} />}
          </span>
          <span className={Styles.overview}>{result.overview}</span>
        </div>
        <i className={`${Styles.icon} material-icons`}>arrow_forward</i>
      </Link>
    );
  });

  return (
    <ReactCSSTransitionGroup transitionName="searchresult" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
      {results}
    </ReactCSSTransitionGroup>
  );
};

export default SearchResults
