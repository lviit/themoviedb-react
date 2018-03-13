import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import apiConnect from "../services/ApiConnect";
import Tiles from "./Tiles";
import { mapDispachToProps } from "../redux/Store";

class MoviesByGenre extends React.Component {
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
    const activeGenre = "fuu";
    /*
      this.props.match.params.id === "all"
        ? "Browse by genre"
        : this.props.genres.filter(
            genre => genre.id == this.props.match.params.id
          )[0].name; */

    return (
      <div>
        <h1>{activeGenre}</h1>
        <Tiles movies={this.state.moviesByGenre} genre={this.genre} />
      </div>
    );
  }
}

MoviesByGenre.propTypes = {
  params: PropTypes.shape({
    splat: PropTypes.string
  })
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    config: state.config,
    genres: state.genres
  };
};

export default connect(mapStateToProps, mapDispachToProps)(MoviesByGenre);
