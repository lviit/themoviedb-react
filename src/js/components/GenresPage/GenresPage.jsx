import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import GenreList from "../GenreList";
import MoviesByGenre from "../MoviesByGenre";
import Styles from "./GenresPage.pcss";

const GenresPage = ({ genres }) => (
  <div className="page">
    <div className={Styles.container}>
      <GenreList genres={genres} className={Styles.genreList} />
      <Route path="/genres/:id" component={MoviesByGenre} />
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    genres: state.genres
  };
};

export default connect(mapStateToProps, null)(GenresPage);
