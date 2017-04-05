import React from 'react';
import Styles from '../../css/details.pcss';

const Details = (props) => {
  const { release_date: releaseDate, revenue, budget, runtime } = props.details;

  return (
    <div className={Styles.container}>
      <div className={Styles.item}>
        <span className={Styles.label}>Release Date:</span>
        {releaseDate}
      </div>
      <div className={Styles.item}>
        <span className={Styles.label}>Revenue:</span>
        {revenue}
      </div>
      <div className={Styles.item}>
        <span className={Styles.label}>Budget:</span>
        {budget}
      </div>
      <div className={Styles.item}>
        <span className={Styles.label}>Runtime:</span>
        {runtime}
      </div>
    </div>
  );
};

Details.propTypes = {
  details: React.PropTypes.shape({
    release_date: React.PropTypes.string,
    revenue: React.PropTypes.number,
    budget: React.PropTypes.number,
    runtime: React.PropTypes.number,
  }),
};

Details.defaultProps = {
  details: {},
};

export default Details;
