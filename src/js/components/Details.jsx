import React from "react";
import { connect } from "react-redux";

import Styles from "../../css/details.pcss";

const Details = ({ releaseDate = '', revenue = 0, budget= 0, runtime = 0 }) => {
  const date = new Date(releaseDate);
  const formattedDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
  const formattedRevenue = `$${revenue
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  const formattedBudget = `$${budget
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  const formattedRuntime = `${runtime} minutes`;

  return (
    <div className={Styles.container}>
      <div className={Styles.item}>
        <span className={Styles.label}>Release Date:</span>
        {formattedDate}
      </div>
      <div className={Styles.item}>
        <span className={Styles.label}>Revenue:</span>
        {formattedRevenue}
      </div>
      <div className={Styles.item}>
        <span className={Styles.label}>Budget:</span>
        {formattedBudget}
      </div>
      <div className={Styles.item}>
        <span className={Styles.label}>Runtime:</span>
        {formattedRuntime}
      </div>
    </div>
  );
};

Details.propTypes = {
  details: React.PropTypes.shape({
    release_date: React.PropTypes.string,
    revenue: React.PropTypes.number,
    budget: React.PropTypes.number,
    runtime: React.PropTypes.number
  })
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    releaseDate: state.movieFullView.details.release_date,
    revenue: state.movieFullView.details.revenue,
    budget: state.movieFullView.details.budget,
    runtime: state.movieFullView.details.runtime
  };
};

export default connect(mapStateToProps)(Details);
