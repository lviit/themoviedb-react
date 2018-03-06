import React from "react";
import { connect } from "react-redux";

import Styles from "../../css/MovieFull.pcss";
import GenreList from "./GenreList";
import Details from "./Details";
import MovieImage from "./MovieImage";

class FullView extends React.Component {
  constructor() {
    super();
    this.state = { animateMeter: false };
  }
  componentDidMount() {
    this.setState({ animateMeter: true });
  }

  render() {
    const {
      details: {
        title,
        tagline,
        overview,
        backDropPath,
        genres,
        voteAverage = 0,
      },
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
        <div className="container">
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
                    strokeDashoffset: strokeDash - strokeDash * (voteAverage / 10),
                    strokeDasharray: strokeDash
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FullView.propTypes = {
  details: React.PropTypes.shape({
    title: React.PropTypes.string,
    tagline: React.PropTypes.string,
    overview: React.PropTypes.string,
    backDropPath: React.PropTypes.string,
    genres: React.PropTypes.array,
    voteAverage: React.PropTypes.number
  }),
  config: React.PropTypes.shape({
    images: React.PropTypes.shape({
      backdrop_sizes: React.PropTypes.array,
      secure_base_url: React.PropTypes.string
    })
  })
};

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
