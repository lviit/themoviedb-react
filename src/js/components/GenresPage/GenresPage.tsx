import Page from "@utils/Page";
import * as React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import GenreList from "../GenreList";
import MoviesByGenre from "../MoviesByGenre";
import * as Styles from "./GenresPage.pcss";

import { Igenre } from "@types";

interface IProps {
  genres: Igenre[];
}

const GenresPage: React.SFC<IProps> = ({ genres }) => (
  <Page>
    <div>
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
