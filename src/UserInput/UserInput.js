import React from 'react';

const userInput = (props) => {
  const style = {
    marginTop: '25px'
  };

  return (
    <input 
      type="text"
      style={style} 
      onChange={props.change}
      value={props.currentName}
    />
  );
};

export default userInput;