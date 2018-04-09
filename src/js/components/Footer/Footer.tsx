import * as React from "react";
import * as Styles from "./Footer.pcss";
const tmdbLogo = require("../../../img/408x161-powered-by-rectangle-green.png");
const Footer = () => (
  <div className={Styles.footer}>
    <img className={Styles.logo} src={tmdbLogo} alt="" />
    <a href="https://github.com/lviit/themoviedb-react/">
      https://github.com/lviit/themoviedb-react/
    </a>
  </div>
);
export default Footer;
