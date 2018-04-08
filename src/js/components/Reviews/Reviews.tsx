import * as React from "react";
import { connect } from "react-redux";
import Styles from "./Reviews.pcss";
type ReviewsProps = {
  reviews?: any[]
};
const Reviews: React.SFC<ReviewsProps> = ({ reviews = [] }) => {
  const reviewsList = reviews.slice(0, 3).map(review => (
    <div className={Styles.item} key={review.id}>
      <h3 className={Styles.author}> {review.author}</h3>
      <p className={Styles.text}>{`${review.content.substr(0, 300)}...`}</p>
    </div>
  ));
  return <div className={Styles.container}>{reviewsList}</div>;
};
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    reviews: state.movieFullView.reviews.data
  };
};
export default connect(mapStateToProps)(Reviews);
