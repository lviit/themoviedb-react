import Section from "@utils/Section";
import * as React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../css/genreColors.pcss";
import "../css/global.pcss";
import * as Styles from "../css/layout.pcss";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import GenresPage from "./components/GenresPage";
import Header from "./components/Header";
import FrontPage from "./FrontPage";
import MovieFullView from "./MovieFullView";
import { mapDispachToProps } from "./redux/Store";
const NotFound = () => <h1>404.. Whoops, page not found!</h1>;
class App extends React.Component<any, any> {
  public componentWillMount() {
    this.props.getConfig();
    this.props.getGenres();
  }
  public render() {
    const { location, history } = this.props;
    return (
      <div>
        <Header />
        <TransitionGroup className={Styles.wrapper}>
          <CSSTransition
            in={true}
            key={location.key}
            classNames={
              history.action === "POP"
                ? {
                    enter: Styles.transitionBackEnter,
                    enterActive: Styles.transitionBackEnterActive,
                    exit: Styles.transitionBackExit,
                    exitActive: Styles.transitionBackExitActive
                  }
                : {
                    enter: Styles.transitionForwardEnter,
                    enterActive: Styles.transitionForwardEnterActive,
                    exit: Styles.transitionForwardExit,
                    exitActive: Styles.transitionForwardExitActive
                  }
            }
            timeout={300}
          >
            <Switch location={location}>
              <Route exact={true} path="/" component={FrontPage} />
              <Route exact={true} path="/about" component={AboutPage} />
              <Route
                path="/movie/:id"
                render={props => (
                  <MovieFullView {...props} key={props.match.params.id} />
                )}
              />
              <Route path="/genres" component={GenresPage} />
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}
export default withRouter(connect(null, mapDispachToProps)(App) as any);
