import React from 'react';
import classNames from 'Classnames';
import Styles from '../../css/SearchResults.pcss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';

const SearchResults = (props) => {

  const results = props.results.results.map(results => {
    var path = '/movie/' + results.id;
    return (
      <ReactCSSTransitionGroup transitionName="search--result" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
        <div className={Styles.result} key={results.id}>
          <Link to={path}>
            <span className={Styles.title}>{results.title}</span>
            <span className={Styles.date}>{results.release_date}</span>
          </Link>
        </div>
      </ReactCSSTransitionGroup>
    );
  });

  return (
    <ReactCSSTransitionGroup transitionName="search--results" transitionEnterTimeout={30000} transitionLeaveTimeout={30000}>
      <div className={classNames(Styles.container, 'container')}>
        {results}
      </div>
    </ReactCSSTransitionGroup>
  );
};

export default SearchResults
