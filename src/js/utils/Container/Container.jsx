import React from "react";
import PropTypes from "prop-types";
import Classnames from "classnames";

import Styles from "./Container.pcss";

const Container = ({ large, children, className, ...rest }) => {
  const classes = Classnames({
    [Styles.large]: large,
    [Styles.small]: !large,
    [className]: true
  });

  return <div className={classes} {...rest}>{children}</div>;
};

Container.propTypes = {
  large: PropTypes.bool
};

Container.defaultProps = {
  large: false
};

export default Container;
