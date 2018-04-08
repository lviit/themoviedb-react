import * as React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Page from "@utils/Page";
import GenreList from "../GenreList";
import MoviesByGenre from "../MoviesByGenre";
import Styles from "./GenresPage.pcss";
const GenresPage = ({ genres }) => (
  <Page>
    <div className={Styles.container}>
      <GenreList genres={genres} className={Styles.genreList} />
      <Route path="/genres/:id" component={MoviesByGenre} />
    </div>
  </Page>
);
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    genres: state.genres
  };
};
export default connect(mapStateToProps, null)(GenresPage);
