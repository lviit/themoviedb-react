import * as React from "react";
import { connect } from "react-redux";
import { mapDispachToProps } from "../../redux/Store";
import ApiConnect from "../../services/ApiConnect";
import Tiles from "../Tiles";
import * as Styles from "./MoviesByGenre.pcss";

class MoviesByGenre extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      moviesByGenre: [],
      activeGenre:
        this.props.match.params.id === "all" ? "" : this.props.match.params.id
    };
  }
  public componentWillMount() {
    ApiConnect.SearchByGenre(this.state.activeGenre).then((response: any) =>
      this.setState({ moviesByGenre: response.results })
    );
  }
  public render() {
    const activeGenre =
      this.props.match.params.id === "" || this.props.genres.length === 0
        ? "Browse by genre"
        : this.props.genres.filter(
            genre => genre.id === this.props.match.params.id
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
