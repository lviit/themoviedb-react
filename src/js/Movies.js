import React from 'react';
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
      this.setState({ config });
    });
    apiConnect.getMovies().then(data => {
      this.setState({ data });
    });
  }

  render() {
    return (
      <div className="movies container">
        <h1>Movies</h1>
        {this.state.config.images && this.state.data.results && <ResultList data={this.state.data} config={this.state.config} />}
      </div>
    );
  }
};

export default MovieList
