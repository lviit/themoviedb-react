import React from 'react';
import { connect } from "react-redux";

import apiConnect from '../services/ApiConnect';
import GenreList from './GenreList';
import Tiles from './Tiles';

class GenresPage extends React.Component {

  constructor() {
    super();
    this.state = {
      genres: [],
      movies: [],
      genreName: 'Browse by genre',
    };
  }

  componentWillMount() {
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
        {this.props.config.images && this.state.movies.results &&
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

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps, config: state.config };
};

export default connect(mapStateToProps)(GenresPage);
