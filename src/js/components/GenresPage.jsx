import React from 'react';
import apiConnect from '../services/ApiConnect';
import GenreList from './GenreList';
import Tiles from './Tiles';

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

    const genre = (this.props.params.splat === 'all') ? '' : this.props.params.splat;
    apiConnect.SearchByGenre(genre).then(movies => this.setState({ movies }));
  }

  filterByGenre(id, genreName) {
    apiConnect.SearchByGenre(id).then(movies => this.setState({ movies }));
    this.setState({ genreName });
  }

  render() {
    return (
      <div className="page container-large">
        <h1>{this.state.genreName}</h1>
        {this.state.genres &&
          <GenreList genres={this.state.genres} filterByGenre={this.filterByGenre} />}
        {this.state.config.images && this.state.movies.results &&
          <Tiles {...this.state} />}
      </div>
    );
  }
}

GenresPage.propTypes = {
  params: React.PropTypes.shape({
    splat: React.PropTypes.string,
  }),
};

GenresPage.defaultProps = {
  params: {},
};

export default GenresPage;
