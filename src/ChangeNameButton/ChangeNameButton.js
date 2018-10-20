import React from 'react';

const nameChangeButton = (props) => {
  return (
    <button onClick={props.click}>Change name</button>
  );
};

export default nameChangeButton;