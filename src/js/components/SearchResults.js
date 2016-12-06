import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';

const SearchResults = (props) => {
      console.log(props);

  const results = props.results.results.map(results => {
    var path = '/movie/' + results.id;
    return (
      <ReactCSSTransitionGroup transitionName="search--result" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
        <div className="search--result" key={results.id}>
          <Link to={path}>
            <span className="search-result--title">{results.title}</span>
            <span className="search-result--date">{results.release_date}</span>
          </Link>
        </div>
      </ReactCSSTransitionGroup>
    );
  });

  return (
    <ReactCSSTransitionGroup transitionName="search--results" transitionEnterTimeout={30000} transitionLeaveTimeout={30000}>
      <div className="search--results container">
        {results}
      </div>
    </ReactCSSTransitionGroup>
  );
};

export default SearchResults
