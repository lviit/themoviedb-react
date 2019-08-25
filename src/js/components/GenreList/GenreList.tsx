import * as classnames from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";
import * as Styles from "./GenreList.pcss";

interface IgenreListProps {
  className?: string;
  compact?: boolean;
  genres: Igenre[];
}

const GenreList: React.SFC<IgenreListProps> = ({ genres, compact, className }) => {
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
          <div className={`${Styles.gradientBg} gradient-genre-${genre.id}--light`} />
        </div>
      )
  );
  const containerClasses = classnames(className, {
    [Styles.container]: true,
    [Styles.compact]: compact
  });
  return <div className={containerClasses}>{genreList}</div>;
};
GenreList.defaultProps = {
  compact: false,
  genres: []
};
export default GenreList;
