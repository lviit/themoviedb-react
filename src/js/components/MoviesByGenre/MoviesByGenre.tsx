import * as React from "react";
import { connect } from "react-redux";
import apiConnect from "../../services/ApiConnect";
import Tiles from "../Tiles";
import { mapDispachToProps } from "../../redux/Store";
import * as Styles from "./MoviesByGenre.pcss";
type MoviesByGenreProps = {
  params?: {
    splat?: string;
  };
};
type MoviesByGenreState = {
  moviesByGenre: undefined[];
};
class MoviesByGenre extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      moviesByGenre: [],
      activeGenre:
        this.props.match.params.id === "all" ? "" : this.props.match.params.id
    };
  }
  componentWillMount() {
    apiConnect
      .SearchByGenre(this.state.activeGenre)
      .then((response: any) => this.setState({ moviesByGenre: response.results }));
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
        <Tiles
          movies={this.state.moviesByGenre}
          genre={this.state.activeGenre}
        />
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
