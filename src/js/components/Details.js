import React from 'react';
import css from '../../css/details.css'

const Details = (props) => {
  const {release_date, revenue, budget, runtime} = props.details;

  return(
    <div className="movie--details">
      <div className="details--item">
        <label className="details--label">Release Date:</label>
        {release_date}
      </div>
      <div className="details--item">
        <label className="details--label">Revenue:</label>
        {revenue}
      </div>
      <div className="details--item">
        <label className="details--label">Budget:</label>
        {budget}
      </div>
      <div className="details--item">
        <label className="details--label">Runtime:</label>
        {runtime}
      </div>
    </div>
  );
};

export default Details
