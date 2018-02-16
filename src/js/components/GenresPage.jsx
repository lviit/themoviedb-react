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
      moviesByGenre: []
    };
  }

  componentWillMount() {
    this.genre =
      this.props.match.params.id === "all" ? "" : this.props.match.params.id;
    apiConnect
      .SearchByGenre(this.genre)
      .then(response => this.setState({ moviesByGenre: response.results }));
  }

  render() {
    const activeGenre =
      this.props.match.params.id === "all"
        ? "Browse by genre"
        : this.props.genres.filter(
            genre => genre.id == this.props.match.params.id
          )[0].name;

    return (
      <div className="page container-large">
        <h1>{activeGenre}</h1>
        <GenreList genres={this.props.genres} />
        <Tiles movies={this.state.moviesByGenre} genre={this.genre} />
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
