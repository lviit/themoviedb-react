import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory} from 'react-router';
import MovieList from './movies.jsx';

const TestRoute = () => <h1>Just testing the router.</h1>
const NotFound = () => <h1>404.. Whoops, page not found!</h1>

const Nav = () => (
  <ul className="navigation">
    <li className="navigation--link"><IndexLink activeClassName="active" to='/'>Home</IndexLink></li>
    <li className="navigation--link"><IndexLink activeClassName="active" to='/test'>Test</IndexLink></li>
  </ul>
)

const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
)

let App = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={MovieList} />
          <Route path='/test' component={TestRoute} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
