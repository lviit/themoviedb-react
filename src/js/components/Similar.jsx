import React from 'react';
import MovieList from './MovieList';
import Section from './Section';

const Similar = (props) => {
  const NumResults = 4;
  const results = props.data.results.slice(0, NumResults);
  const content = props.config.images && <MovieList data={results} config={props.config} />;

  return <Section title="You might also like" content={content} />;
};

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

Similar.defaultProps = {
  data: [],
  config: {},
};


export default Similar;
