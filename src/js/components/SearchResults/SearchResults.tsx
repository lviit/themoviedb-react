import * as React from "react";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import * as Styles from "./SearchResults.pcss";
import GenreList from "../GenreList";
import MovieImage from "../MovieImage";
type SearchResultsProps = {
  genres?: object[];
  searchResults?: {
    results?: any[];
  };
  config?: {
    images?: {
      secure_base_url?: string;
      logo_sizes?: any[];
    };
  };
};
const SearchResults: React.SFC<any> = props => {
  const results = props.searchResults.results.map(result => {
    const path = `/movie/${result.id}`;
    const date = new Date(result.release_date);
    const year = date.getFullYear();
    const genres = props.genres.filter(genre => {
      const match = result.genre_ids.filter(genreId => genreId === genre.id);
      return match[0] === genre.id;
    });
    return (
      <CSSTransition
        key={result.id}
        classNames={{
          enter: Styles.enter,
          enterActive: Styles.enterActive,
          exit: Styles.exit,
          exitActive: Styles.exitActive
        }}
        timeout={300}
      >
        <Link
          to={path}
          className={Styles.result}
          onClick={() => props.toggleSearchBox()}
        >
          <MovieImage
            size={props.config.images.logo_sizes[0]}
            imageBaseUrl={props.config.images.secure_base_url}
            path={result.poster_path}
          />
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
      </CSSTransition>
    );
  });
  return <TransitionGroup>{results}</TransitionGroup>;
};
SearchResults.defaultProps = {
  genres: [],
  searchResults: [],
  config: {}
};
export default SearchResults;
