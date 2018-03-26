import React from "react";
import { connect } from "react-redux";
import { mapDispachToProps } from "./redux/Store";

import Container from "@utils/Container";
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
        <Container>
          <MovieList movies={this.props.latestMovies.slice(5)} />
        </Container>
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
