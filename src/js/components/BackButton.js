import React from 'react';
import materialIcons from '../../css/material-icons.pcss';
import Styles from '../../css/BackButton.pcss';

const BackButton = (props) => <i className={Styles.button + ' material-icons'} onClick={props.goBack}>arrow_back</i>

export default BackButton
