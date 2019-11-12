import React from 'react';

const Dog = (props) => {
    // debugger;
  return (
    <div className="dogItem">
      <img src={props.dog.image} alt="" />
      <h2>{props.dog.name}</h2>
      <p> {props.dog.gender} - {props.dog.height}</p>
    </div>
  );
};

export default Dog;
