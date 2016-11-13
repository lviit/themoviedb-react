import React from 'react';
import css from '../css/style.css';
import apiConnect from './services/ApiConnect';
import FullView from './components/FullView';

class MovieFullView extends React.Component {
  constructor() {
    super();
    this.state = {
      config: [],
      data: [],
    }
  }
  componentWillMount() {
    apiConnect.getConfig().then(config => {
      apiConnect.getMovieFullview(this.props.params.splat).then(data => {
        this.setState({
          config,
          data,
        });
      });
    });
  }
  render() {
    return (
      <div className="movie__full">
        {this.state.config.images && <FullView data={this.state.data} config={this.state.config} />}
      </div>
    );
  }
};

export default MovieFullView
