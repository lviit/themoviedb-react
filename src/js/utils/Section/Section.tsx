import Container from "@utils/Container";
import * as classnames from "classnames";
import * as React from "react";
import * as Styles from "./Section.pcss";

interface IsectionProps {
  title: string;
  dark?: boolean;
  children: React.ReactNode;
}

const Section: React.SFC<IsectionProps> = ({ title, dark, children }) => {
  const classes = classnames({
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
Section.defaultProps = {
  title: null,
  dark: false
};
export default Section;
