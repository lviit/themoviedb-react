import React from "react";
import { connect } from "react-redux";
import TextTruncate from "react-text-truncate";

import Styles from "../../css/reviews.pcss";

const Reviews = ({ reviews = [] }) => {
  const reviewsList = reviews.slice(0, 3).map(review => (
    <div className={Styles.item} key={review.id}>
      <h3 className={Styles.author}> {review.author}</h3>
      <p>
        <TextTruncate
          containerClassName={Styles.content}
          line={10}
          truncateText="…"
          text={review.content}
        />
      </p>
    </div>
  ));

  return <div className={Styles.container}>{reviewsList}</div>;
};

Reviews.propTypes = {
  reviews: React.PropTypes.array
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    reviews: state.movieFullView.reviews
  };
};

export default connect(mapStateToProps)(Reviews);
