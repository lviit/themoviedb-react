import React from 'react';
import css from '../css/style.css';
import apiConnect from './services/ApiConnect';
import ResultList from './components/ResultList';

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      config: [],
      data: [],
    }
  }
  componentWillMount() {
    apiConnect.getConfig().then(config => {
      apiConnect.getMovies().then(data => {
        this.setState({
          config,
          data,
        });
      });
    });
  }
  render() {
    return (
      <div className="movies">
        <h1>Movies</h1>
        {this.state.config.images && <ResultList data={this.state.data} config={this.state.config} />}
      </div>
    );
  }
};

export default MovieList
