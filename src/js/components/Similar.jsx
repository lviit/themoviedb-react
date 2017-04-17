import React from 'react';
import MovieList from './MovieList';
import Section from './Section';

const Similar = (props) => {
  const NumResults = 4;
  props.movies.results = props.movies.results.slice(0, NumResults);
  const content = <MovieList {...props} />;

  return <Section title="You might also like" content={content} />;
};

Similar.propTypes = {
  movies: React.PropTypes.shape({
    results: React.PropTypes.array,
  }),
};

Similar.defaultProps = {
  movies: [],
};


export default Similar;
