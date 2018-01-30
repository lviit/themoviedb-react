import React from "react";
import Classnames from "classnames";
import Styles from "../../css/section.pcss";

const Section = ({ title, dark, children }) => {
  const classes = Classnames({
    [Styles.dark]: dark,
    [Styles.section]: true
  });

  return (
    <div className={classes}>
      {title && <h2 className={Styles.title}>{title}</h2>}
      <div className="container">{children}</div>
    </div>
  );
};

Section.propTypes = {
  title: React.PropTypes.string,
  dark: React.PropTypes.bool
};

Section.defaultProps = {
  title: null,
  dark: false
};

export default Section;
