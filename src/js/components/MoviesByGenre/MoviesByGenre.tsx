import * as React from "react";
import { connect } from "react-redux";
import apiConnect from "../../services/ApiConnect";
import Tiles from "../Tiles";
import { mapDispachToProps } from "../../redux/Store";
import Styles from "./MoviesByGenre.pcss";
type MoviesByGenreProps = {
  params?: {
    splat?: string;
  };
};
type MoviesByGenreState = {
  moviesByGenre: undefined[];
};
type MoviesByGenreState = {
  moviesByGenre: undefined[];
};
class MoviesByGenre extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      moviesByGenre: []
    };
  }
  componentWillMount() {
    this.genre =
      this.props.match.params.id === "all" ? "" : this.props.match.params.id;
    apiConnect
      .SearchByGenre(this.genre)
      .then(response => this.setState({ moviesByGenre: response.results }));
  }
  render() {
    console.log(this.props.match.params.id.length);
    const activeGenre =
      this.props.match.params.id === "" || this.props.genres.length === 0
        ? "Browse by genre"
        : this.props.genres.filter(
            genre => genre.id == this.props.match.params.id
          )[0].name;
    return (
      <div>
        <h1 className={Styles.title}>{activeGenre}</h1>
        <Tiles movies={this.state.moviesByGenre} genre={this.genre} />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    config: state.config,
    genres: state.genres
  };
};
export default connect(mapStateToProps, mapDispachToProps)(MoviesByGenre);
