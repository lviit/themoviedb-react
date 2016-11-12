import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, hashHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MovieList from './Movies';
import MovieFullView from './Moviefullview';

const TestRoute = () => <h1>Just testing the router.</h1>
const NotFound = () => <h1>404.. Whoops, page not found!</h1>

const Nav = () => (
  <ul className="navigation">
    <li className="navigation--link"><IndexLink activeClassName="active" to='/'>Home</IndexLink></li>
    <li className="navigation--link"><IndexLink activeClassName="active" to='/test'>Test</IndexLink></li>
  </ul>
);

const Container = (props) => (
  <div>
    <Nav />
    <ReactCSSTransitionGroup transitionName="pageSlider" transitionEnterTimeout={800} transitionLeaveTimeout={800}>
      <div className="page-wrapper" key={props.location.pathname}>
        {props.children}
      </div>
    </ReactCSSTransitionGroup>
  </div>
);

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Container}>
      <IndexRoute component={MovieList} />
      <Route path='/test' component={TestRoute} />
      <Route path='movie/*' component={MovieFullView} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
);

render(
  <App />,
  document.getElementById('content')
);
