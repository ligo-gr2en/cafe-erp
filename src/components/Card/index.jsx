import React from 'react';
import classNames from 'classnames';

const Card = ({ className, rounded, children }) => {
  return (
    <div className={classNames(
      'Card',
      { 'Card_rounded': rounded },
      className)}>
      {children}
    </div>
  );
};

export default Card;
