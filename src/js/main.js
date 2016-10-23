import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory} from 'react-router';
import MovieList from './movies.jsx';

const TestRoute = () => <h1>Just testing the router.</h1>

let App = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={MovieList} />
        <Route path='/test' component={TestRoute} />
      </Router>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
