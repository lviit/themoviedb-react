import React from 'react';
import Styles from '../../css/details.pcss'

const Details = (props) => {
  const {release_date, revenue, budget, runtime} = props.details;

  return(
    <div className="movie--details">
      <div className={Styles.item}>
        <label className={Styles.label}>Release Date:</label>
        {release_date}
      </div>
      <div className={Styles.item}>
        <label className={Styles.label}>Revenue:</label>
        {revenue}
      </div>
      <div className={Styles.item}>
        <label className={Styles.label}>Budget:</label>
        {budget}
      </div>
      <div className={Styles.item}>
        <label className={Styles.label}>Runtime:</label>
        {runtime}
      </div>
    </div>
  );
};

export default Details
