import React from "react";

export default (WrappedComponent, className) => {
  return (props, isLoading) =>
    isLoading ? <div className="load-state-wrapper" /> : <WrappedComponent {...props} />;
};
