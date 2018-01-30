import React from "react";
import { connect } from "react-redux";

import apiConnect from "../services/ApiConnect";
import GenreList from "./GenreList";
import Tiles from "./Tiles";
import { mapDispachToProps } from "../redux/Store";

class GenresPage extends React.Component {
  constructor() {
    super();
    this.state = {
      genreName: "Browse by genre"
    };
  }

  componentWillMount() {
    this.props.getGenres();
    this.genre =
      this.props.match.params.id === "all" ? "" : this.props.match.params.id;
    apiConnect
      .SearchByGenre(this.genre)
      .then(movies => this.setState({ movies }));
  }

  render({ genres }) {
    return (
      <div className="page container-large">
        <h1>{this.state.genreName}</h1>
        <GenreList genres={genres} />
        <Tiles {...this.state} genre={this.genre} />
      </div>
    );
  }
}

GenresPage.propTypes = {
  params: React.PropTypes.shape({
    splat: React.PropTypes.string
  })
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    config: state.config,
    genres: state.genres
  };
};

export default connect(mapStateToProps, mapDispachToProps)(GenresPage);
