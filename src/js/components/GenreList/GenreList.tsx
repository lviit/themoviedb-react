import * as React from "react";
import Classnames from "classnames";
import { Link } from "react-router-dom";
import Styles from "./GenreList.pcss";
type GenreListProps = {
  genres?: object[],
  compact?: boolean
};
const GenreList: React.SFC<GenreListProps> = ({
  genres,
  compact,
  className,
  ...rest
}) => {
  const genreList = genres.map(
    genre =>
      compact ? (
        <span className={`${Styles.genre} genre-${genre.id}`} key={genre.id}>
          {genre.name}
        </span>
      ) : (
        <div className={`${Styles.genre} genre-${genre.id}`} key={genre.id}>
          <Link className={Styles.link} to={`/genres/${genre.id}`}>
            {genre.name}
          </Link>
          <div
            className={`${Styles.gradientBg} gradient-genre-${genre.id}--light`}
          />
        </div>
      )
  );
  const containerClasses = Classnames({
    [Styles.container]: true,
    [Styles.compact]: compact,
    [className]: true
  });
  return <div className={containerClasses}>{genreList}</div>;
};
GenreList.defaultProps = {
  genres: [],
  compact: false
};
export default GenreList;
