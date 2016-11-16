import React from 'react';
import apiConnect from './services/ApiConnect';
import FullView from './components/FullView';
import Reviews from './components/Reviews';
import Credits from './components/Credits';
import Similar from './components/Similar';

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
          apiConnect.getCredits(this.props.params.splat).then(credits => {
            apiConnect.getSimilar(this.props.params.splat).then(similar => {
              this.setState({
                config,
                data,
                reviews,
                credits,
                similar
              });
            });
          });
        });
      });
    });
  }
  render() {
    return (
      <div className="movie__full">
        {this.state.config.images && <FullView data={this.state.data} config={this.state.config} />}
        <div className="section section__light">
          {this.state.credits && <Credits data={this.state.credits} config={this.state.config} />}
        </div>
        <div className="section section__dark">
          {this.state.reviews && <Reviews data={this.state.reviews} />}
        </div>
        <div className="section section__light">
          {this.state.similar && <Similar data={this.state.similar} config={this.state.config} />}
        </div>
      </div>
    );
  }
};

export default MovieFullView
