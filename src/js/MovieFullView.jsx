import React from "react";
import { connect } from "react-redux";
import { mapDispachToProps } from "./redux/Store";

import FullView from "./components/MovieFull";
import Reviews from "./components/Reviews";
import Credits from "./components/Credits";
import Similar from "./components/Similar";
import PageWrapper from "./components/PageWrapper";

class MovieFullView extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      credits: [],
      reviews: [],
      similar: []
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.getMovieDetails(id);
    this.props.getReviews(id);
    this.props.getCredits(id);
    this.props.getSimilar(id);
  }

  render() {
    const { details, credits, reviews, similar } = this.props;
    return (
      <div className="page movie__full">
        <FullView details={details} />
        <Credits credits={credits} />
        <Reviews reviews={reviews} />
        <Similar movies={similar} />
      </div>
    );
  }
}

MovieFullView.propTypes = {
  params: React.PropTypes.shape({
    splat: React.PropTypes.string
  })
};

MovieFullView.defaultProps = {
  params: {}
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    config: state.config,
    similar: state.movieFullView.similarMovies,
    credits: state.movieFullView.credits,
    reviews: state.movieFullView.reviews,
    details: state.movieFullView.details
  };
};

export default connect(mapStateToProps, mapDispachToProps)(MovieFullView);
