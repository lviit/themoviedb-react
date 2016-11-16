import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, hashHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MovieList from './Movies';
import MovieFullView from './Moviefullview';
import BackButton from './components/BackButton';
import variablesCSS from '../css/variables.css';
import commonCSS from '../css/common.css';
import layoutCSS from '../css/layout.css';
import navigationCSS from '../css/navigation.css';

const TestRoute = () => <h1>Just testing the router.</h1>
const NotFound = () => <h1>404.. Whoops, page not found!</h1>

const Nav = () => (
  <ul className="navigation">
    <li className="navigation--link"><IndexLink activeClassName="active" to='/'>Home</IndexLink></li>
    <li className="navigation--link"><IndexLink activeClassName="active" to='/test'>Test</IndexLink></li>
  </ul>
);

const Footer = () => (
  <div className="footer section section__dark">
    <div className="container">
      <a href="https://github.com/lviit/themoviedb-react/">https://github.com/lviit/themoviedb-react/</a>
    </div>
  </div>
);

class Container extends React.Component  {
  constructor() {
    super();
  }
  static contextTypes() {
    router: React.PropTypes.object.isRequired
  }
  render() {
    var path = this.props.location.pathname;
    var segment = path.split('/')[2] || 'root';
    //console.log(this.context);
    return(
      <div>
        <div className="header">
          <div className="container">
            <BackButton goBack={this.props.history.goBack} />
            <Nav />
          </div>
        </div>
        <ReactCSSTransitionGroup
          transitionName={segment === 'root' ? 'pageSlider' : 'pageSlider'}
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}>
          <div className="page-wrapper" key={this.props.location.pathname}>
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>
        <Footer />
      </div>
    );
  }
};

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
