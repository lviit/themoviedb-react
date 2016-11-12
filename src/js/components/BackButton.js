import React from 'react';

const BackButton = (props) => {
  const { goBack } = props;
  return (
    <button onClick={goBack}>Back</button>
  );
};

export default BackButton
