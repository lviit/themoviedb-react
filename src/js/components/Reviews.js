import React from 'react';
import TextTruncate from 'react-text-truncate';
import Styles from '../../css/reviews.pcss';

const Reviews = (props) => {
  const NumReviews = 3;
  const reviews = props.data.results.slice(0, NumReviews).map(review => (
    <div className={Styles.item} key={review.id}>
      <h3 className={Styles.author}> {review.author}</h3>
      <p><TextTruncate containerClassName={Styles.content} line={10} truncateText="…" text={review.content} /></p>
    </div>
  ));

  return (
    <div className="section section__dark">
      <div className="container">
        <h2 className="section--title">Reviews</h2>
        <div className={Styles.container}>
          {reviews}
        </div>
      </div>
    </div>
  );
}

Reviews.propTypes = {
  data: React.PropTypes.shape({
    results: React.PropTypes.array,
  }),
};

export default Reviews
