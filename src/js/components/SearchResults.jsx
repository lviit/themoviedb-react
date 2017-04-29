import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import Styles from '../../css/SearchResults.pcss';
import GenreList from './GenreList';

const SearchResults = (props) => {
  const imageBaseUrl = props.config.images.secure_base_url;
  const fileSize = props.config.images.logo_sizes[0];

  const results = props.searchResults.results.map((result) => {
    const path = `/movie/${result.id}`;
    const date = new Date(result.release_date);
    const year = date.getFullYear();

    const genres = props.genres.filter((genre) => {
      const match = result.genre_ids.filter(genreId => genreId === genre.id);
      return match[0] === genre.id;
    });

    return (
      <Link
        to={path}
        className={Styles.result}
        key={result.id}
        onClick={() => props.toggleSearchBox()}
      >
        { result.poster_path ? <img src={imageBaseUrl + fileSize + result.poster_path} alt="" /> :
        <div className={`${Styles.noimage} material-icons`}>broken_image</div>}
        <div className={Styles.infocontainer}>
          <span className={Styles.title}>{result.title}</span>
          <span className={Styles.date}>{`(${year})`}</span>
          <span className={Styles.genres}>
            {genres && <GenreList genres={genres} compact />}
          </span>
          <span className={Styles.overview}>{result.overview}</span>
        </div>
        <i className={`${Styles.icon} material-icons`}>arrow_forward</i>
      </Link>
    );
  });

  return (
    <ReactCSSTransitionGroup
      transitionName="searchresult"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      {results}
    </ReactCSSTransitionGroup>
  );
};

SearchResults.propTypes = {
  genres: React.PropTypes.arrayOf(React.PropTypes.object),
  searchResults: React.PropTypes.shape({
    results: React.PropTypes.array,
  }),
  config: React.PropTypes.shape({
    images: React.PropTypes.shape({
      secure_base_url: React.PropTypes.string,
      logo_sizes: React.PropTypes.array,
    }),
  }),
};

SearchResults.defaultProps = {
  genres: [],
  searchResults: [],
  config: {},
};

export default SearchResults;
