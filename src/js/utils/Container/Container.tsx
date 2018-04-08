import * as React from "react";
import * as classnames from "classnames";
import * as Styles from "./Container.pcss";
type ContainerProps = {
  large?: boolean;
  className?: string;
};
const Container: React.SFC<ContainerProps> = ({
  large,
  children,
  className,
  ...rest
}) => {
  const classes = classnames({
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
