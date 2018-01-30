import React from "react";
import { connect } from "react-redux";

import Styles from "../../css/MovieFull.pcss";
import GenreList from "./GenreList";
import Details from "./Details";
import MovieImage from "./MovieImage";

class FullView extends React.Component {
  render() {
    const {
      details,
      config: {
        images: { backdrop_sizes: imageSizes, secure_base_url: imageBaseUrl }
      }
    } = this.props;
    console.log(this.props);
    const strokeDash = "339.292";

    return (
      <div className={Styles.container}>
        <div className={Styles.imagecontainer}>
          <MovieImage
            backdrop
            size={imageSizes[3]}
            imageBaseUrl={imageBaseUrl}
            path={details.backDropPath}
          />
        </div>
        <div className="container">
          <h1 className={Styles.title}>{details.title}</h1>
          <h2 className={Styles.tagline}>{details.tagline}</h2>
          <div className={Styles.info}>
            <GenreList genres={details.genres} />
            <div className={Styles.overview}>
              <p>{details.overview}</p>
            </div>
            <Details />
            <div className={Styles.score}>
              <span>{details.voteAverage}</span>
              <svg className={Styles.scoreMeter}>
                <circle className={Styles.scoreMeterCircle} />
                <circle
                  className={Styles.scoreMeterValue}
                  style={{
                    "stroke-dashoffset":
                      strokeDash - strokeDash * (details.voteAverage / 10),
                    "stroke-dasharray": strokeDash
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
  data: React.PropTypes.shape({
    title: React.PropTypes.string,
    tagline: React.PropTypes.string,
    overview: React.PropTypes.string,
    backdropPath: React.PropTypes.string,
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
      title: state.movieFullView.details.title,
      tagline: state.movieFullView.details.tagline,
      overview: state.movieFullView.details.overview,
      backDropPath: state.movieFullView.details.backdrop_path,
      voteAverage: state.movieFullView.details.vote_average,
      genres: state.movieFullView.details.genres
    },
  };
};

export default connect(mapStateToProps)(FullView);
