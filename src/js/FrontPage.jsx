import React from "react";
import { connect } from "react-redux";
import { mapDispachToProps } from "./redux/Store";

import Hero from "./components/Hero";
import MovieList from "./components/MovieList";

class Front extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.getLatestMovies();
  }

  render() {
    return (
      <div className="page">
        <Hero movies={this.props.latestMovies.slice(0, 5)} />
        <div className="movies container">
          <MovieList movies={this.props.latestMovies.slice(5)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    latestMovies: state.movies.latest
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Front);
