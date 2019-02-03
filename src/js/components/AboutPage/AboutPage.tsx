import * as React from "react";
import * as Styles from "./AboutPage.pcss";

import Container from "@utils/Container";
import Page from "@utils/Page";

// Typescript doesn't like this?
// import READMEMd from "../../../../README.md";
const READMEMd = require("../../../../README.md");

const AboutPage: React.SFC = () => (
  <Page>
    <Container
      className={Styles.readme}
      dangerouslySetInnerHTML={{ __html: READMEMd }}
    />
  </Page>
);
export default AboutPage;
