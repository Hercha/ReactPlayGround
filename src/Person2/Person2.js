import React from 'react';
import './Person2.css';

const person2 = (props) => {
  return (
    <div className="Person2">
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person2;