import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FrontPage from './FrontPage';
import MovieFullView from './Moviefullview';
import Header from './components/Header';
import Footer from './components/Footer';
import commonCSS from '../css/common.pcss';
import layoutCSS from '../css/layout.pcss';

const About = () => <h1>This product uses the TMDb API but is not endorsed or certified by TMDb.</h1>
const NotFound = () => <h1>404.. Whoops, page not found!</h1>

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
        <Header history={this.props.history} />
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
      <IndexRoute component={FrontPage} />
      <Route path='/about' component={About} />
      <Route path='movie/*' component={MovieFullView} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
);

render(
  <App />,
  document.getElementById('content')
);
