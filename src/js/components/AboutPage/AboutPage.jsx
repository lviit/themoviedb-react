import Styles from './AboutPage.pcss';
import React from 'react';
import Container from '@utils/Container';
import Page from '@utils/Page';
import Readme from '../../../../README.md';

const AboutPage = () => (
  <Page>
    <Container className={Styles.readme} dangerouslySetInnerHTML={{ __html: Readme }} />
  </Page>
);

export default AboutPage;
