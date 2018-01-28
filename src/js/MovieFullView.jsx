import React from 'react';
import apiConnect from './services/ApiConnect';
import FullView from './components/MovieFull';
import Reviews from './components/Reviews';
import Credits from './components/Credits';
import Similar from './components/Similar';

class MovieFullView extends React.Component {
  constructor() {
    super();
    this.state = {
      config: [],
      data: [],
      credits: [],
      reviews: [],
      similar: [],
    };
  }

  componentWillMount() {
    apiConnect.getConfig().then(config => this.setState({ config }));
    apiConnect.getMovieFullview(this.props.match.params.id).then(data => this.setState({ data }));
    apiConnect.getReviews(this.props.match.params.id).then(reviews => this.setState({ reviews }));
    apiConnect.getCredits(this.props.match.params.id).then(credits => this.setState({ credits }));
    apiConnect.getSimilar(this.props.match.params.id).then(similar => this.setState({ similar }));
  }

  render() {
    return (
      <div className="page movie__full">
        {this.state.config.images &&
          this.state.data.id &&
          <FullView {...this.state} />}
        {this.state.credits.id &&
          <Credits {...this.state} />}
        {this.state.reviews.total_results > 0 &&
          <Reviews data={this.state.reviews} />}
        {this.state.similar.total_results > 0 &&
          <Similar movies={this.state.similar} config={this.state.config} />}
      </div>
    );
  }
}

MovieFullView.propTypes = {
  params: React.PropTypes.shape({
    splat: React.PropTypes.string,
  }),
};

MovieFullView.defaultProps = {
  params: {},
};

export default MovieFullView;
