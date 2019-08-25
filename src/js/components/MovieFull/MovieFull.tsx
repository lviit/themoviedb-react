import Container from "@utils/Container";
import * as React from "react";
import { connect } from "react-redux";
import Details from "../Details";
import GenreList from "../GenreList";
import MovieImage from "../MovieImage";
import * as Styles from "./MovieFull.pcss";

import { Iconfig, ImovieDetails } from "@types";

interface IfullViewProps {
  details: ImovieDetails;
  config: Iconfig;
}

interface IfullViewState {
  animateMeter: boolean;
}

class FullView extends React.Component<IfullViewProps, IfullViewState> {
  constructor(props: IfullViewProps) {
    super(props);
    this.state = { animateMeter: false };
  }
  public componentDidMount() {
    setTimeout(() => {
      this.setState({ animateMeter: true });
    }, 100);
  }
  public render() {
    const {
      details: { title, tagline, overview, backDropPath, genres, voteAverage },
      config: { images: { backdrop_sizes = [], secure_base_url: imageBaseUrl } }
    } = this.props;
    const strokeDash = 339.292;
    const imageSize = window.innerWidth > 780 ? backdrop_sizes[3] : backdrop_sizes[1];

    return (
      <div className={Styles.container}>
        <div className={Styles.imagecontainer}>
          <MovieImage
            backdrop={true}
            size={imageSize}
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
                    strokeDasharray: strokeDash.toString(),
                    strokeDashoffset:
                      strokeDash - strokeDash * (this.state.animateMeter ? voteAverage / 10 : 0)
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
const mapStateToProps = (state: Istate, ownProps: any) => {
  const {
    backdrop_path: backDropPath,
    genres,
    overview,
    tagline,
    title,
    vote_average: voteAverage
  } = state.movieFullView.details.data;

  return {
    ...ownProps,
    config: state.config,
    details: {
      backDropPath,
      genres,
      overview,
      tagline,
      title,
      voteAverage
    }
  };
};
export default connect(mapStateToProps)(FullView);
