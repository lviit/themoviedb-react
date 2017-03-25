import React from 'react';
import apiConnect from './services/ApiConnect';
import Hero from './components/Hero';
import MovieList from './components/MovieList';

class Front extends React.Component {
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
      <div className="page">
        {this.state.config.images && this.state.data.results && <Hero data={this.state.data} config={this.state.config} />}
        <div className="movies container">
          {this.state.config.images && this.state.data.results && <MovieList data={this.state.data} config={this.state.config} />}
        </div>
      </div>
    );
  }
};

export default Front
