import React from 'react';
import TextTruncate from 'react-text-truncate';
import Styles from '../../css/reviews.pcss';
import Section from './Section';

const Reviews = (props) => {
  const NumReviews = 3;
  const reviews = props.data.results.slice(0, NumReviews).map(review => (
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

  const content = <div className={Styles.container}>{reviews}</div>;

  return <Section dark title="Reviews" content={content} />;
};

Reviews.propTypes = {
  data: React.PropTypes.shape({
    results: React.PropTypes.array,
  }),
};

Reviews.defaultProps = {
  data: [],
};

export default Reviews;
