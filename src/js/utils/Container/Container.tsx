import * as classnames from "classnames";
import * as React from "react";
import * as Styles from "./Container.pcss";

interface IcontainerProps {
  large?: boolean;
  className?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

const Container: React.SFC<IcontainerProps> = ({ large, children, className, ...rest }) => {
  const classes = classnames(className, {
    [Styles.large]: large,
    [Styles.small]: !large
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
