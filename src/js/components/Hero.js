import React from 'react';
var Slider = require('react-slick');
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router';
import HeroCss from '../../css/movie--hero.css';

//var HeroPrevArrow = (props) => <i {...this.props} class="material-icons">chevron_left</i>  
//var HeroNextArrow = (props) => <i {...this.props} class="material-icons">chevron_right</i>  

var HeroNextArrow = React.createClass({
  render: function() {
    console.log(this.props.className);
    return <i {...this.props} className="slick-arrow slick-next material-icons">chevron_right</i>
  }
});

var HeroPrevArrow = React.createClass({
  render: function() {
    return (
      <i {...this.props} className="slick-arrow slick-prev material-icons">chevron_left</i>
    );
  }
});


class Hero extends React.Component {
  constructor() {
    super();
  }

  render() {
    const sliderSettings = {
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

    const imageBaseUrl = this.props.config.images.secure_base_url;
    const fileSize = this.props.config.images.backdrop_sizes[3];
    const NumSlides = 5;

    const slides = this.props.data.results.slice(0, NumSlides).map(result =>
      <div className="movie--hero" key={result.id}>
        <div className="container">
          <div className="movie--hero__info">
            <h2 className="movie--hero__title">{result.title}</h2>
            <p className="movie--hero__overview"><TextTruncate containerClassName="movie--hero__overview" line={3} truncateText="…" text={result.overview} /></p>     
            <Link className="movie--hero__link" to={'/movie/' + result.id}>Read more</Link>
          </div>
        </div>
        <img className="movie--hero__image" src={imageBaseUrl + fileSize + result.backdrop_path}></img>
      </div>
    );

    return (
      <Slider className="hero" {...sliderSettings}>
        {slides}
      </Slider>
    );
  }
}

export default Hero
