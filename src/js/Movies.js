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
      this.setState({
        config,
      });
    });
    apiConnect.getMovies().then(data => {
      this.setState({
        data,
      });
    });
  }
  render() {
    return (
      <div className="movies">
        <h1>Movies</h1>
        <ResultList data={this.state.data} config={this.state.config} />
      </div>
    );
  }
};

export default MovieList
