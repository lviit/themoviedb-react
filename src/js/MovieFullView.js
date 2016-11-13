import React from 'react';
import css from '../css/style.css';
import apiConnect from './services/ApiConnect';
import FullView from './components/FullView';
import Reviews from './components/Reviews';

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
        apiConnect.getReviews(this.props.params.splat).then(reviews => {
          this.setState({
            config,
            data,
            reviews
          });
        });
      });
    });
  }
  render() {
    return (
      <div className="movie__full">
        {this.state.config.images && <FullView data={this.state.data} config={this.state.config} />}
        <div className="section">
          {this.state.reviews && <Reviews data={this.state.reviews} />}
        </div>
      </div>
    );
  }
};

export default MovieFullView
