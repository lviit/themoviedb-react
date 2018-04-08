import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import MovieImage from "../MovieImage";
import Container from "@utils/Container";
import Styles from "./Hero.pcss";
import "../../../css/slick.pcss";
const HeroPrevArrow = props => (
  <i onClick={props.onClick} className="slick-arrow slick-prev material-icons">
    chevron_left
  </i>
);
const HeroNextArrow = props => (
  <i onClick={props.onClick} className="slick-arrow slick-next material-icons">
    chevron_right
  </i>
);
type HeroProps = {
  movies?: any[],
  config?: {
    images?: {
      backdrop_sizes?: any[],
      secure_base_url?: string
    }
  }
};
const Hero: React.SFC<HeroProps> = ({
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
      <Container>
        <div className={Styles.info}>
          <h2 className={Styles.title}>{movie.title}</h2>
          <p className={Styles.overview}>
            {`${movie.overview.substr(0, 150)}...`}
          </p>
          <Link className={Styles.link} to={`/movie/${movie.id}`}>
            Read more
          </Link>
        </div>
      </Container>
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
const mapStateToProps = (state, ownProps) => {
  return { ...ownProps, config: state.config };
};
export default connect(mapStateToProps)(Hero);
