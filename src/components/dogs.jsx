import React from 'react';
import dogsList from '../../data/data';
import Dog from './dog';

const Dogs = () => {
  return (
    <div>
      {dogsList.map((dog) => {
        return (
          <Dog dog={dog} />
        );
      })}
    </div>
  );
};

export default Dogs;
