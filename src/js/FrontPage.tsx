import Container from "@utils/Container";
import Page from "@utils/Page";
import * as React from "react";
import { connect } from "react-redux";
import Hero from "./components/Hero";
import MovieList from "./components/MovieList";
import { mapDispachToProps } from "./redux/Store";

class Front extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  public componentWillMount() {
    this.props.getLatestMovies();
  }
  public render() {
    return (
      <Page>
        <Hero movies={this.props.latestMovies.slice(0, 5)} />
        <Container>
          <MovieList movies={this.props.latestMovies.slice(5)} />
        </Container>
      </Page>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    latestMovies: state.movies.latest
  };
};
export default connect(mapStateToProps, mapDispachToProps)(Front);
