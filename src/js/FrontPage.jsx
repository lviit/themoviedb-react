import React from "react";
import { connect } from "react-redux";

import apiConnect from "./services/ApiConnect";
import Hero from "./components/Hero";
import MovieList from "./components/MovieList";

class Front extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentWillMount() {
    apiConnect.getMovies().then(movies => this.setState({ movies }));
  }

  render() {
    return (
      <div className="page">
        {this.props.config.images &&
          this.state.movies.results && (
            <div>
              <Hero {...this.state} />
              <div className="movies container">
                <MovieList {...this.state} />
              </div>
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps, config: state.config };
};

export default connect(mapStateToProps)(Front);
