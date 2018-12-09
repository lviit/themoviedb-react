import React from 'react';
import Styles from './Footer.pcss';
import tmdbSvg from '../../../img/tmdb.svg';
import githubSvg from '../../../img/github.svg';

const Footer = () => (
  <div className={Styles.footer}>
    <div className={Styles.tmdb} dangerouslySetInnerHTML={{ __html: tmdbSvg }} />
    <a
      className={Styles.github}
      href="https://github.com/lviit/themoviedb-react/"
      dangerouslySetInnerHTML={{ __html: githubSvg }}
    />
  </div>
);

export default Footer;
