import * as React from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import GenreList from "../GenreList";
import MovieImage from "../MovieImage";
import * as Styles from "./SearchResults.pcss";

import { Iconfig, Igenre, Imovie } from "@types";

interface IsearchResultsProps {
  toggleSearchBox: () => void;
  genres: Igenre[];
  searchResults: Imovie[];
  config: Iconfig;
}

const SearchResults: React.SFC<IsearchResultsProps> = props => {
  const results = props.searchResults.map(result => {
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
        <Link to={path} className={Styles.result} onClick={() => props.toggleSearchBox()}>
          <MovieImage
            size={props.config.images.logo_sizes[0]}
            imageBaseUrl={props.config.images.secure_base_url}
            path={result.poster_path}
          />
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
      </CSSTransition>
    );
  });
  return <TransitionGroup>{results}</TransitionGroup>;
};

SearchResults.defaultProps = {
  genres: []
};

export default SearchResults;
