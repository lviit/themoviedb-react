import React from 'react';
import Styles from '../../css/footer.pcss';

const tmdbLogo = require('../../img/408x161-powered-by-rectangle-green.png');

const Footer = () => (
  <div className="footer section section__dark">
    <div className="container">
      <img className={Styles.logo} src={tmdbLogo} alt="" />
      <a href="https://github.com/lviit/themoviedb-react/">https://github.com/lviit/themoviedb-react/</a>
    </div>
  </div>
);

export default Footer;
