/* global document */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import FrontPage from './FrontPage';
import MovieFullView from './MovieFullView';
import GenresPage from './components/GenresPage';
import Header from './components/Header';
import Footer from './components/Footer';
// import 'normalize.css';
import '../css/common.pcss';
import '../css/layout.pcss';
import '../css/material-icons.pcss';
import '../css/loader.pcss';
import '../css/mixins.pcss';

const About = () =>
  <h1>This product uses the TMDb API but is not endorsed or certified by TMDb.</h1>;
const NotFound = () =>
  <h1>404.. Whoops, page not found!</h1>;

const Container = props => (
  <div>
    <Header history={props.history} />
    <div className="page-wrapper" key={props.location.pathname}>
      {props.children}
    </div>
    <Footer />
  </div>
);

Container.propTypes = {
  history: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
  children: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string,
  }),
};

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={FrontPage} />
      <Route path="/about" component={About} />
      <Route path="movie/*" component={MovieFullView} />
      <Route path="genres" component={GenresPage} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

render(
  <App />,
  document.getElementById('content'),
);
