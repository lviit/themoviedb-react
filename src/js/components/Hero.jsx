import React from "react";
import { connect } from "react-redux";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import MovieImage from "./MovieImage";
import Styles from "../../css/Hero.pcss";
import "../../css/slick.pcss";

const HeroPrevArrow = props => (
  <i {...props} className="slick-arrow slick-prev material-icons">
    chevron_left
  </i>
);
const HeroNextArrow = props => (
  <i {...props} className="slick-arrow slick-next material-icons">
    chevron_right
  </i>
);

const Hero = ({
  movies,
  config: {
    images: { backdrop_sizes: imageSizes, secure_base_url: imageBaseUrl }
  }
}) => {
  const sliderSettings = {
    className: Styles.container,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <HeroNextArrow />,
    prevArrow: <HeroPrevArrow />
  };

  const slides = movies.map(movie => (
    <div className={Styles.hero} key={movie.id}>
      <div className="container">
        <div className={Styles.info}>
          <h2 className={Styles.title}>{movie.title}</h2>
          <p className={Styles.overview}>
            <TextTruncate
              containerClassName={Styles.overview}
              line={3}
              truncateText="…"
              text={movie.overview}
            />
          </p>
          <Link className={Styles.link} to={`/movie/${movie.id}`}>
            Read more
          </Link>
        </div>
      </div>
      <MovieImage
        backdrop
        size={imageSizes[3]}
        imageBaseUrl={imageBaseUrl}
        path={movie.backdrop_path}
      />
    </div>
  ));

  return slides.length > 0 && <Slider {...sliderSettings}>{slides}</Slider>;
};

Hero.propTypes = {
  movies: React.PropTypes.shape({
    results: React.PropTypes.array
  }),
  config: React.PropTypes.shape({
    images: React.PropTypes.shape({
      backdrop_sizes: React.PropTypes.array,
      secure_base_url: React.PropTypes.string
    })
  })
};

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps, config: state.config };
};

export default connect(mapStateToProps)(Hero);
