import WithScrollReveal from "@utils/WithScrollReveal";
import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MovieImage from "../MovieImage";
import * as Styles from "./MovieList.pcss";

import { Iconfig, Imovie } from "@types";

interface IMovieListProps {
  movies: Imovie[];
  config: Iconfig;
}

const MovieList: React.SFC<IMovieListProps> = ({
  movies,
  config: { images: { backdrop_sizes: imageSizes, secure_base_url: imageBaseUrl } }
}) => {
  const movieList = movies.map(movie => (
    <Link className={Styles.movie} key={movie.id} to={`/movie/${movie.id}`}>
      <MovieImage size={imageSizes[0]} imageBaseUrl={imageBaseUrl} path={movie.poster_path} />
      <div className={Styles.info}>
        <h3 className={Styles.title}>{movie.title}</h3>
      </div>
    </Link>
  ));
  return <div className={Styles.container}>{movieList}</div>;
};

MovieList.defaultProps = {
  movies: []
};

const mapStateToProps = (state: Istate, ownProps: any) => {
  return { ...ownProps, config: state.config };
};
export default connect(mapStateToProps)(WithScrollReveal(MovieList, Styles.movie));
