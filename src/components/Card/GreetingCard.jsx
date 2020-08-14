import React from 'react';
import Card from '.';

const GreetingCard = ({ name }) => {
  return (
    <Card rounded className="GreetingCard">
      <span className="GreetingCard-Title">Привет, {name}!</span>
      <span className="GreetingCard-Text">С возвращением в Terentiew</span>
    </Card>
  );
};

export default GreetingCard;
