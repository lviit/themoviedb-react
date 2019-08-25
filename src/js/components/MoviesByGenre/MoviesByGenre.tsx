import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { mapDispachToProps } from "../../redux/Store";
import ApiConnect from "../../services/ApiConnect";
import Tiles from "../Tiles";
import * as Styles from "./MoviesByGenre.pcss";

import { Igenre, Imovie } from "@types";

type IMoviesByGenreProps = RouteComponentProps & {
  genres: Igenre[];
  match: { params: { id: string } };
};

interface IMoviesByGenreState {
  activeGenre: string;
  moviesByGenre: Imovie[];
}

class MoviesByGenre extends React.Component<IMoviesByGenreProps, IMoviesByGenreState> {
  constructor(props: IMoviesByGenreProps) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      activeGenre: id === "all" ? "" : id,
      moviesByGenre: []
    };
  }
  public componentWillMount() {
    ApiConnect.SearchByGenre(this.state.activeGenre).then((response: any) =>
      this.setState({ moviesByGenre: response.results })
    );
  }
  public render() {
    const title =
      this.props.genres.length > 0 &&
      this.props.genres.filter(genre => genre.id.toString() === this.state.activeGenre)[0].name;
    return (
      <div>
        <h1 className={Styles.title}>{title}</h1>
        <Tiles movies={this.state.moviesByGenre} genre={this.state.activeGenre} />
      </div>
    );
  }
}

const mapStateToProps = (state: Istate, ownProps: IMoviesByGenreProps) => {
  return {
    ...ownProps,
    genres: state.genres
  };
};

export default connect(mapStateToProps, mapDispachToProps)(MoviesByGenre);
