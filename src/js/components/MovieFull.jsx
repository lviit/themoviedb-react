import React from "react";
import Styles from "../../css/MovieFull.pcss";
import GenreList from "./GenreList";
import Details from "./Details";
import MovieImage from "./MovieImage";

class FullView extends React.Component {
  render() {
    const {
      title,
      tagline,
      overview,
      backdrop_path: backdropPath,
      vote_average: voteAverage,
      genres
    } = this.props.data;
    const strokeDash = "339.292";

    return (
      <div className={Styles.container}>
        <div className={Styles.imagecontainer}>
          <MovieImage
            backdrop
            size={this.props.config.images.backdrop_sizes[3]}
            imageBaseUrl={this.props.config.images.secure_base_url}
            path={backdropPath}
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
            <Details details={this.props.data} />
            <div className={Styles.score}>
              <span>{voteAverage}</span>
              <svg
                className={Styles.scoreMeter}
              >
                <circle className={Styles.scoreMeterCircle} />
                <circle
                  className={(Styles.scoreMeterValue)}
                  style={{
                    "stroke-dashoffset":
                      strokeDash - strokeDash * (voteAverage / 10),
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
    backdrop_path: React.PropTypes.string,
    genres: React.PropTypes.array,
    vote_average: React.PropTypes.number
  }),
  config: React.PropTypes.shape({
    images: React.PropTypes.shape({
      backdrop_sizes: React.PropTypes.array,
      secure_base_url: React.PropTypes.string
    })
  })
};

FullView.defaultProps = {
  data: [],
  config: {}
};

export default FullView;
