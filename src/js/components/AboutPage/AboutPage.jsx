import Styles from "./AboutPage.pcss";
import React from "react";
import Container from "@utils/Container";
import Readme from "../../../../README.md";

const AboutPage = () => (
  <div className="page">
    <Container
      className={Styles.readme}
      dangerouslySetInnerHTML={{ __html: Readme }}
    />
  </div>
);

export default AboutPage;
