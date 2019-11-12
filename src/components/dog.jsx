import React from 'react';

const Dog = (props) => {
  // debugger;
  return (
    <div>
      <h1>{props.dog.name}</h1>
      <p> {props.dog.gender}</p>
      <p> {props.dog.height}</p>
      <img src={props.dog.image} alt="" />
    </div>
  );
};

export default Dog;
