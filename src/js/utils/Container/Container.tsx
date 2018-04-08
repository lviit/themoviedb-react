import * as React from "react";
import Classnames from "classnames";
import Styles from "./Container.pcss";
type ContainerProps = {
  large?: boolean
};
const Container: React.SFC<ContainerProps> = ({
  large,
  children,
  className,
  ...rest
}) => {
  const classes = Classnames({
    [Styles.large]: large,
    [Styles.small]: !large,
    [className]: true
  });
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
Container.defaultProps = {
  large: false
};
export default Container;
