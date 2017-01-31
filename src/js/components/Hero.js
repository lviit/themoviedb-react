import React from 'react';
var Slider = require('react-slick');
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router';
import SlickStyles from '../../css/slick.css';
import Styles from '../../css/movie--hero.css';

//var HeroPrevArrow = (props) => <i {...this.props} class="material-icons">chevron_left</i>
//var HeroNextArrow = (props) => <i {...this.props} class="material-icons">chevron_right</i>

var HeroNextArrow = React.createClass({
  render: function() {
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
      <div className={Styles.hero} key={result.id}>
        <div className="container">
          <div className={Styles.info}>
            <h2 className={Styles.title}>{result.title}</h2>
            <p className={Styles.overview}><TextTruncate containerClassName={Styles.overview} line={3} truncateText="…" text={result.overview} /></p>
            <Link className={Styles.link} to={'/movie/' + result.id}>Read more</Link>
          </div>
        </div>
        <img className={Styles.image} src={imageBaseUrl + fileSize + result.backdrop_path}></img>
      </div>
    );

    return (
      <Slider className={Styles.container} {...sliderSettings}>
        {slides}
      </Slider>
    );
  }
}

export default Hero
