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
  public render() {
    const { similar, isLoading } = this.props;
    if (isLoading) {
      return <div />;
    }
    return (
      <Page>
        <MovieFull />
        <Section title="Cast">
          <Credits />
        </Section>
        <Section title="Reviews" dark={true}>
          <Reviews />
        </Section>
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
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    config: state.config,
    isLoading:
      state.movieFullView.similarMovies.isLoading ||
      state.movieFullView.credits.isLoading ||
      state.movieFullView.reviews.isLoading ||
      state.movieFullView.details.isLoading,
    similar: state.movieFullView.similarMovies.data
  };
};
export default connect(mapStateToProps, mapDispachToProps)(MovieFullView);
