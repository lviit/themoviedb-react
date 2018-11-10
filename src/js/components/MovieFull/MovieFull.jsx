import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Styles from './MovieFull.pcss';
import Container from '@utils/Container';
import GenreList from '../GenreList';
import Details from '../Details';
import MovieImage from '../MovieImage';

class FullView extends React.Component {
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
      config: { images: { backdrop_sizes = [], secure_base_url: imageBaseUrl } },
    } = this.props;
    const strokeDash = 339.292;
    const imageSize = window.innerWidth > 780 ? backdrop_sizes[3] : backdrop_sizes[1];

    return (
      <div className={Styles.container}>
        <div className={Styles.imagecontainer}>
          <MovieImage backdrop size={imageSize} imageBaseUrl={imageBaseUrl} path={backDropPath} />
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
                      strokeDash - strokeDash * (this.state.animateMeter ? voteAverage / 10 : 0),
                    strokeDasharray: strokeDash,
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

FullView.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    tagline: PropTypes.string,
    overview: PropTypes.string,
    backDropPath: PropTypes.string,
    genres: PropTypes.array,
    voteAverage: PropTypes.number,
  }),
  config: PropTypes.shape({
    images: PropTypes.shape({
      backdrop_sizes: PropTypes.array,
      secure_base_url: PropTypes.string,
    }),
  }),
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  config: state.config,
  details: {
    title: state.movieFullView.details.data.title,
    tagline: state.movieFullView.details.data.tagline,
    overview: state.movieFullView.details.data.overview,
    backDropPath: state.movieFullView.details.data.backdrop_path,
    voteAverage: state.movieFullView.details.data.vote_average,
    genres: state.movieFullView.details.data.genres,
  },
});

export default connect(mapStateToProps)(FullView);
