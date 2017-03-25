import React from 'react';
import MovieList from './MovieList';

const Similar = (props) => {
  const NumResults = 4;
  props.data.results = props.data.results.slice(0, NumResults);

  return (
    <div className="section section__light">
      <h2 className="section--title">You might also like</h2>
      <div className="container">
        {props.config.images && <MovieList data={props.data} config={props.config} />}
      </div>
    </div>
  );
}

export default Similar
