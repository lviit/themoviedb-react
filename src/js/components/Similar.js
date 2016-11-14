import React from 'react';
import ResultList from './ResultList';

const Similar = (props) => {
  const NumResults = 4;
  props.data.results = props.data.results.slice(0, NumResults);

  return (
    <div className="container">
      <h2>You might also like</h2>
      <div className="similar">
        {props.config.images && <ResultList data={props.data} config={props.config} />}
      </div>
    </div>
  );
}

export default Similar
