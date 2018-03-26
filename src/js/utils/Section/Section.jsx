import React from "react";
import PropTypes from 'prop-types';
import Classnames from "classnames";
import Styles from "./Section.pcss";
import Container from "@utils/Container";

const Section = ({ title, dark, children }) => {
  const classes = Classnames({
    [Styles.dark]: dark,
    [Styles.section]: true
  });

  return (
    <div className={classes}>
      {title && <h2 className={Styles.title}>{title}</h2>}
      <Container>{children}</Container>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  dark: PropTypes.bool
};

Section.defaultProps = {
  title: null,
  dark: false
};

export default Section;
