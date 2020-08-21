import React from 'react';
import classNames from 'classnames';
import ButtonBase from '@material-ui/core/ButtonBase';

const Fab = ({ label, children }) => {
  const [extended, setExtended] = React.useState(false);
  
  const toggleExtended = () => {
    setExtended(!extended);
  };

  return (
    <ButtonBase
      className={classNames('Fab', { 'Fab_extended': extended })}
      onMouseEnter={toggleExtended}
      onMouseLeave={toggleExtended}>
      {children}
      <span className="Fab-Label">{label}</span>
    </ButtonBase>
  );
};

export default Fab;
