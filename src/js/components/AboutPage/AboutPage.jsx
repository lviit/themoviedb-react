import Styles from "./AboutPage.pcss";
import React from "react";
import Readme from "../../../../README.md";

const AboutPage = () => (
  <div className={Styles.readme} dangerouslySetInnerHTML={{ __html: Readme }} />
);

export default AboutPage;
