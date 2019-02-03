import Container from "@utils/Container";
import WithScrollReveal from "@utils/WithScrollReveal";
import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MovieImage from "../MovieImage";
import * as Styles from "./Tiles.pcss";

import { Iconfig, Imovie } from "@types";

interface ItilesProps {
  movies: Imovie[];
  config: Iconfig;
  genre: string;
}

const Tiles: React.SFC<ItilesProps> = ({
  movies = [],
  genre,
  config: {
    images: { backdrop_sizes: imageSizes, secure_base_url: imageBaseUrl }
  }
}) => {
  const movieList = movies.map((movie, index) => {
    const size = index % 7 === 0 ? 2 : 1;
    return (
      <div className={size === 1 ? Styles.small : Styles.big} key={movie.id}>
        <Link className={Styles.movie} key={movie.id} to={`/movie/${movie.id}`}>
          <div
            className={[
              Styles.gradientOverlay,
              `gradient-genre-${genre ? genre : "all"}`
            ].join(" ")}
          />
          <MovieImage
            backdrop={true}
            size={imageSizes[size]}
            imageBaseUrl={imageBaseUrl}
            path={movie.backdrop_path}
          />

          <div
            className={
              size === 1 ? Styles.info : `${Styles.info} ${Styles.info__big}`
            }
          >
            <h3 className={size === 1 ? Styles.title : Styles.title__big}>
              {movie.title}
            </h3>
            <div
              className={size === 1 ? Styles.overview : Styles.overview__big}
            >{`${movie.overview.substr(0, size === 1 ? 50 : 200)}...`}</div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <Container large={true} className={Styles.container}>
      {movieList}
    </Container>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    config: state.config
  };
};
export default connect(mapStateToProps)(WithScrollReveal(Tiles, Styles.movie));
