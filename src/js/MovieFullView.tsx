import Page from "@utils/Page";
import Section from "@utils/Section";
import * as React from "react";
import { connect } from "react-redux";
import Credits from "./components/Credits";
import MovieFull from "./components/MovieFull";
import MovieList from "./components/MovieList";
import Reviews from "./components/Reviews";
import { mapDispachToProps } from "./redux/Store";

class MovieFullView extends React.Component<any, any> {
  public static defaultProps: any;

  constructor(props) {
    super(props);
  }
  public componentWillMount() {
    const id = this.props.match.params.id;
    this.props.getMovieDetails(id);
    this.props.getReviews(id);
    this.props.getCredits(id);
    this.props.getSimilar(id);
  }

  render() {
    const { similar, isLoading, reviews } = this.props;
    if (isLoading) return <div />;
    return (
      <Page>
        <MovieFull />
        <Section title="Cast">
          <Credits />
        </Section>
        {reviews.length > 0 && (
          <Section title="Reviews" dark>
            <Reviews />
          </Section>
        )}
        <Section title="You might also like">
          <MovieList movies={similar.slice(0, 4)} />
        </Section>
      </Page>
    );
  }
}

MovieFullView.defaultProps = {
  params: {}
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  config: state.config,
  similar: state.movieFullView.similarMovies.data,
  reviews: state.movieFullView.reviews.data,
  isLoading:
    state.movieFullView.similarMovies.isLoading ||
    state.movieFullView.credits.isLoading ||
    state.movieFullView.reviews.isLoading ||
    state.movieFullView.details.isLoading
});

export default connect(mapStateToProps, mapDispachToProps)(MovieFullView);