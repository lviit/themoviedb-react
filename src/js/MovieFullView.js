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
    }
  }

  componentWillMount() {
    apiConnect.getConfig().then(config => {
      this.setState({ config });
    });
    apiConnect.getMovieFullview(this.props.params.splat).then(data => {
      this.setState({data});
    });
    apiConnect.getReviews(this.props.params.splat).then(reviews => {
      this.setState({reviews});
    });
    apiConnect.getCredits(this.props.params.splat).then(credits => {
      this.setState({credits});
    });
    apiConnect.getSimilar(this.props.params.splat).then(similar => {
      this.setState({similar});
    });
  }

  render() {
    return (
      <div className="page movie__full">
        {this.state.config.images && this.state.data.id && <FullView data={this.state.data} config={this.state.config} />}
        {this.state.credits.id && <Credits data={this.state.credits} config={this.state.config} />}
        {this.state.reviews.total_results > 0 && <Reviews data={this.state.reviews} />}
        {this.state.similar.total_results > 0 && <Similar data={this.state.similar} config={this.state.config} />}
      </div>
    );
  }
};

export default MovieFullView
