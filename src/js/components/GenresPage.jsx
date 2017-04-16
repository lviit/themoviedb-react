import React from 'react';
import apiConnect from '../services/ApiConnect';
import GenreList from './GenreList';
import MovieList from './MovieList';

class GenresPage extends React.Component {

  constructor() {
    super();
    this.filterByGenre = this.filterByGenre.bind(this);
    this.state = {
      genres: [],
      config: [],
      movies: [],
      genreName: 'Browse by genre',
    };
  }

  componentWillMount() {
    apiConnect.getConfig().then(config => this.setState({ config }));
    apiConnect.getGenres().then(genres => this.setState({ genres }));
    apiConnect.SearchByGenre(28).then(movies => this.setState({ movies }));
  }

  filterByGenre(id, genreName) {
    apiConnect.SearchByGenre(id).then(movies => this.setState({ movies }));
    this.setState({ genreName: genreName });
  }

  render() {
    return (
      <div className="page container">
        <h1>{this.state.genreName}</h1>
        {this.state.genres &&
          <GenreList genres={this.state.genres} filterByGenre={this.filterByGenre} />}
        {this.state.config.images && this.state.movies.results &&
          <MovieList data={this.state.movies.results} config={this.state.config} />}
      </div>
    );
  }
}

GenresPage.propTypes = {
  genres: React.PropTypes.arrayOf(React.PropTypes.object),
};

GenresPage.defaultProps = {
  genres: [],
};

export default GenresPage;
