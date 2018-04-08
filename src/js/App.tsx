import * as React from "react";
import { render } from "react-dom";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { mapDispachToProps } from "./redux/Store";
import Section from "@utils/Section";
import FrontPage from "./FrontPage";
import MovieFullView from "./MovieFullView";
import GenresPage from "./components/GenresPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import "../css/global.pcss";
import "../css/genreColors.pcss";
import Styles from "../css/layout.pcss";
const NotFound = () => <h1>404.. Whoops, page not found!</h1>;
class App extends React.Component<any, any> {
  componentWillMount() {
    this.props.getConfig();
    this.props.getGenres();
  }
  render() {
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
              <Route exact path="/" component={FrontPage} />
              <Route exact path="/about" component={AboutPage} />
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
export default withRouter(connect(null, mapDispachToProps)(App));
