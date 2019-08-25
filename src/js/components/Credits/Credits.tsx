import WithScrollReveal from "@utils/WithScrollReveal";
import * as React from "react";
import { connect } from "react-redux";
import * as Styles from "./Credits.pcss";

interface IcastMember {
  id: string;
  profile_path: string;
  name: string;
  character: string;
}

interface ICreditsProps {
  cast: IcastMember[];
  config: {
    images: {
      secure_base_url: string;
    };
  };
}

const Credits: React.SFC<ICreditsProps> = ({
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
const mapStateToProps = (state: Istate, ownProps: any) => {
  return {
    ...ownProps,
    config: state.config,
    cast: state.movieFullView.credits.data.cast
  };
};
export default connect(mapStateToProps)(WithScrollReveal(Credits, Styles.item));
