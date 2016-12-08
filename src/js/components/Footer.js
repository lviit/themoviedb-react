import React from 'react';
import css from '../../css/footer.css';

const tmdbLogo = require('../../img/408x161-powered-by-rectangle-blue.png');
const Footer = () => (
  <div className="footer section section__dark">
    <div className="container">
      <img className="footer--logo" src={tmdbLogo} />
      <a href="https://github.com/lviit/themoviedb-react/">https://github.com/lviit/themoviedb-react/</a>
    </div>
  </div>
);

export default Footer
