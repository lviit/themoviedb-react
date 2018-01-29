import React from 'react';
import { connect } from "react-redux";

import apiConnect from './services/ApiConnect';
import FullView from './components/MovieFull';
import Reviews from './components/Reviews';
import Credits from './components/Credits';
import Similar from './components/Similar';
import PageWrapper from './components/PageWrapper';

class MovieFullView extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      credits: [],
      reviews: [],
      similar: [],
    };
  }

  componentWillMount() {
    console.log('pling');
    apiConnect.getMovieFullview(this.props.match.params.id).then(data => this.setState({ data }));
    apiConnect.getReviews(this.props.match.params.id).then(reviews => this.setState({ reviews }));
    apiConnect.getCredits(this.props.match.params.id).then(credits => this.setState({ credits }));
    apiConnect.getSimilar(this.props.match.params.id).then(similar => this.setState({ similar }));
  }

  render() {
    return (
      <div className="page movie__full">
        {this.props.config.images &&
          this.state.data.id &&
          <FullView {...this.state} />}
        {this.state.credits.id &&
          <Credits {...this.state} />}
        {this.state.reviews.total_results > 0 &&
          <Reviews data={this.state.reviews} />}
        {this.state.similar.total_results > 0 &&
          <Similar movies={this.state.similar} config={this.props.config} />}
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

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps, config: state.config };
};

export default connect(mapStateToProps)(MovieFullView);