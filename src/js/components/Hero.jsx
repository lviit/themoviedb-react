import React from 'react';
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router';
import Slider from 'react-slick';
import MovieImage from './MovieImage';
import Styles from '../../css/Hero.pcss';
import '../../css/slick.pcss';

const HeroPrevArrow = props =>
  <i {...props} className="slick-arrow slick-prev material-icons">chevron_left</i>;
const HeroNextArrow = props =>
  <i {...props} className="slick-arrow slick-next material-icons">chevron_right</i>;

const Hero = (props) => {
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
    prevArrow: <HeroPrevArrow />,
  };

  const NumSlides = 5;
  const slides = props.movies.results.slice(0, NumSlides).map(result =>
    <div className={Styles.hero} key={result.id}>
      <div className="container">
        <div className={Styles.info}>
          <h2 className={Styles.title}>{result.title}</h2>
          <p className={Styles.overview}>
            <TextTruncate
              containerClassName={Styles.overview}
              line={3}
              truncateText="…"
              text={result.overview}
            />
          </p>
          <Link className={Styles.link} to={`/movie/${result.id}`}>Read more</Link>
        </div>
      </div>
      <MovieImage
        backdrop
        size={props.config.images.backdrop_sizes[3]}
        imageBaseUrl={props.config.images.secure_base_url}
        path={result.backdrop_path}
      />
    </div>,
  );

  return (
    <Slider {...sliderSettings}>
      {slides}
    </Slider>
  );
};

Hero.propTypes = {
  movies: React.PropTypes.shape({
    results: React.PropTypes.array,
  }),
  config: React.PropTypes.shape({
    images: React.PropTypes.shape({
      backdrop_sizes: React.PropTypes.array,
      secure_base_url: React.PropTypes.string,
    }),
  }),
};

export default Hero;
