import * as React from "react";
//import ScrollReveal from "scrollreveal";
export default (WrappedComponent, className) => {
  return class WithScrollReveal extends React.Component {
    componentDidMount() {
      /*
      const sr = ScrollReveal({
        origin: "bottom",
        duration: 500,
        delay: 0,
        opacity: 0,
        distance: "50px",
        scale: 1,
        easing: "ease"
      });
      setTimeout(() => {
        sr.reveal(`.${className}`, 50);
      }, 1000); */
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
