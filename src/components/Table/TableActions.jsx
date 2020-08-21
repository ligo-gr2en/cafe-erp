import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '../Fab';

const TableActions = () => {
  return (
    <div className="TableActions">
      <input type="search" name="search" className="InputSearch" />
      <Fab label="Добавить">
        <AddIcon />
      </Fab>
    </div>
  );
};

export default TableActions;
