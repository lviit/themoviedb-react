import React from 'react';
import css from '../../css/material-icons.css';

const BackButton = (props) => {
  const { goBack } = props;
  return (
    <i className="material-icons back-button" onClick={goBack}>arrow_back</i>
  );
};

export default BackButton
