import React from 'react';
import apiConnect from './services/ApiConnect';
import Hero from './components/Hero';
import MovieList from './components/MovieList';

class Front extends React.Component {
  constructor() {
    super();
    this.state = {
      config: [],
      movies: [],
    };
  }

  componentWillMount() {
    apiConnect.getConfig().then(config => this.setState({ config }));
    apiConnect.getMovies().then(movies => this.setState({ movies }));
  }

  render() {
    return (
      <div className="page">
        {this.state.config.images && this.state.movies.results &&
          <Hero {...this.state} />}
        <div className="movies container">
          {this.state.config.images && this.state.movies.results &&
            <MovieList {...this.state} />}
        </div>
      </div>
    );
  }
}

export default Front;
