import * as classnames from "classnames";
import * as React from "react";
import * as Styles from "./Container.pcss";
interface ContainerProps {
  large?: boolean;
  className?: string;
  dangerouslySetInnerHTML?: any;
  children?: any;
}
const Container: React.SFC<any> = ({ large, children, className, ...rest }) => {
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
