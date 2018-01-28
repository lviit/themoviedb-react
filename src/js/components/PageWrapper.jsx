import React from "react";
import { CSSTransition } from "react-transition-group";

const PageWrapper = Page => {
  return props => (
    <CSSTransition {...props} timeout={1000} classNames="fade">
      <Page {...props} />
    </CSSTransition>
  );
};
export default PageWrapper;
