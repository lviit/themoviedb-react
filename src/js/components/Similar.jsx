import React from 'react';
import MovieList from './MovieList';
import Section from './Section';

const Similar = ({ movies }) => {
  const content = <MovieList movies={movies.slice(0, 4)} />;
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
