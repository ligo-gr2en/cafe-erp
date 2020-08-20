import React from 'react';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const TablePopover = ({ open, anchorEl, onClose, onDeleteButtonClick }) => {
  const handleDelete = () => {
    onDeleteButtonClick();
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
      <List aria-label="menu">
        <ListItem button onClick={handleDelete}>
          <ListItemIcon>
            <DeleteRoundedIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Удалить" />
        </ListItem>
      </List>
    </Popover>
  );
};

export default TablePopover;
