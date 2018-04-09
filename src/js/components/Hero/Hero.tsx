import Container from "@utils/Container";
import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../../css/slick.pcss";
import MovieImage from "../MovieImage";
import * as Styles from "./Hero.pcss";

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

interface HeroProps {
  movies?: any[];
  config?: {
    images?: {
      backdrop_sizes?: any[];
      secure_base_url?: string;
    };
  };
}

const Hero: React.SFC<HeroProps> = ({
  movies,
  config: {
    images: { backdrop_sizes: imageSizes, secure_base_url: imageBaseUrl }
  }
}) => {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    className: Styles.container,
    dots: true,
    infinite: true,
    nextArrow: <HeroNextArrow />,
    prevArrow: <HeroPrevArrow />,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500
  };
  const slides = movies.map(movie => (
    <div key={movie.id}>
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
