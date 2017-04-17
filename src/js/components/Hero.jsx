import React from 'react';
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router';
import Slider from 'react-slick';
import Styles from '../../css/movie--hero.pcss';
import '../../css/slick.pcss';

const HeroPrevArrow = props =>
  <i {...props} className="slick-arrow slick-prev material-icons">chevron_left</i>;
const HeroNextArrow = props =>
  <i {...props} className="slick-arrow slick-next material-icons">chevron_right</i>;

const Hero = (props) => {
  const sliderSettings = {
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

  const imageBaseUrl = props.config.images.secure_base_url;
  const fileSize = props.config.images.backdrop_sizes[3];
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
          <Link className={Styles.link} to={`/movie/ ${result.id}`}>Read more</Link>
        </div>
      </div>
      <img className={Styles.image} src={imageBaseUrl + fileSize + result.backdrop_path} alt="" />
    </div>,
  );

  return (
    <Slider className={Styles.container} {...sliderSettings}>
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
