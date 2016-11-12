import React from 'react';
import css from '../css/style.css';
import apiConnect from './services/apiConnect';
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
      this.setState({
        config,
      });
    });
    apiConnect.getMovieFullview(this.props.params.splat).then(data => {
      this.setState({
        data,
      });
    });
  }
  render() {
    return (
      <div className="movie--fullview">
        <FullView data={this.state.data} config={this.state.config} />
      </div>
    );
  }
};

export default MovieFullView
