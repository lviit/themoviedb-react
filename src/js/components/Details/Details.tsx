import * as React from "react";
import { connect } from "react-redux";
import * as Styles from "./Details.pcss";
type DetailsProps = {
  releaseDate?: string;
  revenue?: number;
  budget?: number;
  runtime?: number;
};
const Details: React.SFC<DetailsProps> = ({
  releaseDate = "",
  revenue = 0,
  budget = 0,
  runtime = 0
}) => {
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
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    releaseDate: state.movieFullView.details.data.release_date,
    revenue: state.movieFullView.details.data.revenue,
    budget: state.movieFullView.details.data.budget,
    runtime: state.movieFullView.details.data.runtime
  };
};
export default connect(mapStateToProps)(Details);
