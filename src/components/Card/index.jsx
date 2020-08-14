import React from 'react';
import classNames from 'classnames';

const Card = ({ className, elevation, rounded, children }) => {
  return (
    <div className={classNames(
      'Card',
      {
        'Card_rounded': rounded,
        [`Card_elevation${elevation}`]: elevation,
      },
      className)}>
      {children}
    </div>
  );
};

export default Card;
