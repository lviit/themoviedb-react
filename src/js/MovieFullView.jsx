import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { mapDispachToProps } from "./redux/Store";

import Section from "@utils/Section";
import MovieList from "./components/MovieList";
import FullView from "./components/MovieFull";
import Reviews from "./components/Reviews";
import Credits from "./components/Credits";

class MovieFullView extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.getMovieDetails(id);
    this.props.getReviews(id);
    this.props.getCredits(id);
    this.props.getSimilar(id);
  }

  render() {
    const { similar, isLoading } = this.props;
    if (isLoading) return <div />;
    return (
      <div className="page">
        <FullView />
        <Section title="Cast">
          <Credits />
        </Section>
        <Section title="Reviews" dark>
          <Reviews />
        </Section>
        <Section title="You might also like">
          <MovieList movies={similar.slice(0, 4)} />
        </Section>
      </div>
    );
  }
}

MovieFullView.propTypes = {
  params: PropTypes.shape({
    splat: PropTypes.string
  })
};

MovieFullView.defaultProps = {
  params: {}
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    config: state.config,
    similar: state.movieFullView.similarMovies.data,
    isLoading:
      state.movieFullView.similarMovies.isLoading ||
      state.movieFullView.credits.isLoading ||
      state.movieFullView.reviews.isLoading ||
      state.movieFullView.details.isLoading
  };
};

export default connect(mapStateToProps, mapDispachToProps)(MovieFullView);
