import * as React from "react";
const scrollreveal = require("scrollreveal");

export default (WrappedComponent: React.ReactType, className: string) =>
  class WithScrollReveal extends React.Component {
    public componentDidMount() {
      const sr = scrollreveal({
        delay: 0,
        distance: "50px",
        duration: 500,
        easing: "ease",
        opacity: 0,
        origin: "bottom",
        scale: 1
      });
      setTimeout(() => {
        sr.reveal(`.${className}`, 50);
      }, 1000);
    }
    public render() {
      return <WrappedComponent {...this.props} />;
    }
  };
