import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

interface IscrollToTopProps extends RouteComponentProps {
  children: JSX.Element;
}

class ScrollToTop extends React.Component<IscrollToTopProps> {
  public componentDidUpdate(prevProps: IscrollToTopProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  public render() {
    return this.props.children;
  }
}
export default withRouter(ScrollToTop);
