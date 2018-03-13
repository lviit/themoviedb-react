import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import GenreList from "./GenreList";
import MoviesByGenre from "./MoviesByGenre";

const GenresPage = ({ genres }) => (
  <div className="page">
    <div className="container-large">
      <GenreList genres={genres} />
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
