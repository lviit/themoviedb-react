import Styles from "./AboutPage.pcss";
import React from "react";
import Readme from "../../../../README.md";

const AboutPage = () => (
  <div className="page">
    <div
      className={Styles.readme}
      dangerouslySetInnerHTML={{ __html: Readme }}
    />
  </div>
);

export default AboutPage;
