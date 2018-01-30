import React from "react";
import { connect } from "react-redux";
import ScrollReveal from "../ScrollReveal";

import Styles from "../../css/cast.pcss";

class Credits extends React.Component {
  componentDidMount() {
    ScrollReveal.reveal(`.${Styles.item}`, 50);
  }

  render() {
    const {
      cast = [],
      config: { images: { secure_base_url: imageBaseUrl } }
    } = this.props;

    const castList = cast.slice(0, 6).map(castMember => (
      <div className={Styles.item} key={castMember.id}>
        {castMember.profile_path ? (
          <img
            className={Styles.image}
            src={`${imageBaseUrl}w264_and_h264_bestv2${
              castMember.profile_path
            }`}
            alt=""
          />
        ) : (
          <div className={`${Styles.noimage} material-icons`}>person</div>
        )}
        <div className={Styles.name}>{castMember.name}</div>
        <div className={Styles.character}>{castMember.character}</div>
      </div>
    ));

    return <div className={Styles.container}>{castList}</div>;
  }
}

Credits.propTypes = {
  cast: React.PropTypes.array,
  config: React.PropTypes.shape({
    images: React.PropTypes.shape({
      secure_base_url: React.PropTypes.string
    })
  })
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    config: state.config,
    cast: state.movieFullView.credits.cast,
  };
};

export default connect(mapStateToProps)(Credits);

