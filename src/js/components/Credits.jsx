import React from 'react';
import Styles from '../../css/cast.pcss';
import Section from './Section';
import ScrollReveal from '../ScrollReveal';

class Credits extends React.Component {
  componentDidMount() {
    ScrollReveal.reveal(`.${Styles.item}`, 50);
  }

  render() {
    const castSize = 6;
    const imageBaseUrl = this.props.config.images.secure_base_url;
    const fileSize = 'w264_and_h264_bestv2';

    const cast = this.props.data.cast.slice(0, castSize).map(castMember =>
      <div className={Styles.item} key={castMember.id}>
        <img
          className={Styles.image}
          src={imageBaseUrl + fileSize + castMember.profile_path}
          alt=""
        />
        <div className={Styles.name}>{castMember.name}</div>
        <div className={Styles.character}>{castMember.character}</div>
      </div>,
    );

    const content = <div className={Styles.container}>{cast}</div>;
    return <Section title="Cast" content={content} />;
  }
}

Credits.propTypes = {
  data: React.PropTypes.shape({
    cast: React.PropTypes.array,
  }),
  config: React.PropTypes.shape({
    images: React.PropTypes.shape({
      secure_base_url: React.PropTypes.string,
    }),
  }),
};

Credits.defaultProps = {
  data: [],
  config: {},
};

export default Credits;
