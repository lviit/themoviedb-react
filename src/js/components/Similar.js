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

Similar.propTypes = {
  data: React.PropTypes.shape({
    results: React.PropTypes.array,
  }),
  config: React.PropTypes.shape({
    images: React.PropTypes.shape({
      secure_base_url: React.PropTypes.string,
    }),
  }),
};


export default Similar
