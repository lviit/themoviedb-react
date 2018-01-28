/* global document */

import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import FrontPage from './FrontPage';
import MovieFullView from './MovieFullView';
import GenresPage from './components/GenresPage';
import Header from './components/Header';
import Footer from './components/Footer';
import '../css/common.pcss';
import '../css/layout.pcss';
import '../css/material-icons.pcss';
import '../css/mixins.pcss';

const About = () =>
  <h1>This product uses the TMDb API but is not endorsed or certified by TMDb.</h1>;
const NotFound = () =>
  <h1>404.. Whoops, page not found!</h1>;

const App = props => (
  <div>
    <Header history={props.history} />
    <div className="page-wrapper">
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/about" component={About} />
      <Route path="/movie/:id" render={props => <MovieFullView {...props} key={props.match.params.id} />} />
      <Route path="/genres/:id" render={props => <GenresPage {...props} key={props.match.params.id} />} />
      <Route component={NotFound} />
    </div>
    <Footer />
  </div>
);

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('content'),
);
