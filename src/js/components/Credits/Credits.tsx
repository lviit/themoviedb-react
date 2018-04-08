import * as React from "react";
import { connect } from "react-redux";
import WithScrollReveal from "@utils/WithScrollReveal";
import Styles from "./Credits.pcss";
type CreditsProps = {
  cast?: any[],
  config?: {
    images?: {
      secure_base_url?: string
    }
  }
};
const Credits: React.SFC<CreditsProps> = ({
  cast = [],
  config: { images: { secure_base_url: imageBaseUrl } }
}) => {
  const castList = cast.slice(0, 6).map(castMember => (
    <div className={Styles.item} key={castMember.id}>
      {castMember.profile_path ? (
        <img
          className={Styles.image}
          src={`${imageBaseUrl}w264_and_h264_bestv2${castMember.profile_path}`}
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
};
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    config: state.config,
    cast: state.movieFullView.credits.data.cast
  };
};
export default connect(mapStateToProps)(WithScrollReveal(Credits, Styles.item));
