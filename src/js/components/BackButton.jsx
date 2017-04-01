import React from 'react';
import Styles from '../../css/BackButton.pcss';

const BackButton = props => <i className={`${Styles.button} material-icons`} onClick={props.goBack}>arrow_back</i>;

BackButton.propTypes = {
  goBack: React.PropTypes.func,
};

BackButton.defaultProps = {
  goBack: () => null,
};

export default BackButton;
