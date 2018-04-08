import * as React from "react";
import { connect } from "react-redux";
import Styles from "./MovieFull.pcss";
import Container from "@utils/Container";
import GenreList from "../GenreList";
import Details from "../Details";
import MovieImage from "../MovieImage";
type FullViewProps = {
  details?: {
    title?: string,
    tagline?: string,
    overview?: string,
    backDropPath?: string,
    genres?: any[],
    voteAverage?: number
  },
  config?: {
    images?: {
      backdrop_sizes?: any[],
      secure_base_url?: string
    }
  }
};
type FullViewState = {
  animateMeter: boolean,
  animateMeter: boolean
};
class FullView extends React.Component<FullViewProps, FullViewState> {
  constructor() {
    super();
    this.state = { animateMeter: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animateMeter: true });
    }, 100);
  }
  render() {
    const {
      details: { title, tagline, overview, backDropPath, genres, voteAverage },
      config: {
        images: {
          backdrop_sizes: imageSizes = [],
          secure_base_url: imageBaseUrl
        }
      }
    } = this.props;
    const strokeDash = 339.292;
    return (
      <div className={Styles.container}>
        <div className={Styles.imagecontainer}>
          <MovieImage
            backdrop
            size={imageSizes[3]}
            imageBaseUrl={imageBaseUrl}
            path={backDropPath}
          />
        </div>
        <Container>
          <h1 className={Styles.title}>{title}</h1>
          <h2 className={Styles.tagline}>{tagline}</h2>
          <div className={Styles.info}>
            <GenreList genres={genres} />
            <div className={Styles.overview}>
              <p>{overview}</p>
            </div>
            <Details />
            <div className={Styles.score}>
              <span>{voteAverage}</span>
              <svg className={Styles.scoreMeter}>
                <circle className={Styles.scoreMeterCircle} />
                <circle
                  className={Styles.scoreMeterValue}
                  style={{
                    strokeDashoffset:
                      strokeDash -
                      strokeDash *
                        (this.state.animateMeter ? voteAverage / 10 : 0),
                    strokeDasharray: strokeDash
                  }}
                />
              </svg>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    config: state.config,
    details: {
      title: state.movieFullView.details.data.title,
      tagline: state.movieFullView.details.data.tagline,
      overview: state.movieFullView.details.data.overview,
      backDropPath: state.movieFullView.details.data.backdrop_path,
      voteAverage: state.movieFullView.details.data.vote_average,
      genres: state.movieFullView.details.data.genres
    }
  };
};
export default connect(mapStateToProps)(FullView);
