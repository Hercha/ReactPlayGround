import React from 'react';

const Button = (props) => {
  return (
    <button style={props.style} onClick={props.click}>{props.buttonText}</button>
  );
};

export default Button;