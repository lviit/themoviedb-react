import React from 'react';
import apiConnect from '../services/ApiConnect';
import GenreList from './GenreList';
import Tiles from './Tiles';

class GenresPage extends React.Component {

  constructor() {
    super();
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

    this.genre = (this.props.match.params.id === 'all') ? '' : this.props.match.params.id;
    apiConnect.SearchByGenre(this.genre).then(movies => this.setState({ movies }));
  }

  render() {
    return (
      <div className="page container-large">
        <h1>{this.state.genreName}</h1>
        {this.state.genres &&
          <GenreList genres={this.state.genres} />}
        {this.state.config.images && this.state.movies.results &&
          <Tiles {...this.state} genre={this.genre} />}
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
