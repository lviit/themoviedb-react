import * as React from "react";

export default (WrappedComponent: React.ReactType) => {
  return (props: any, isLoading: boolean) =>
    isLoading ? <div className="load-state-wrapper" /> : <WrappedComponent {...props} />;
};
