import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePopover,
} from '../components';
import { deleteUnit } from '../redux/actions/units';
import { toggleTablePopover } from '../redux/actions/ui';

const Units = () => {
  const [popoverAnchor, setPopoverAnchor] = React.useState(null);
  const [selectedItemId, setSelectedItemId] = React.useState();
  
  const dispatch = useDispatch();
  const items = useSelector(({ units }) => units.items);
  const showTablePopover = useSelector(({ ui }) => ui.showTablePopover);

  const handlePopoverOpen = React.useCallback((event, itemId) => {
    setSelectedItemId(itemId);
    dispatch(toggleTablePopover());
    setPopoverAnchor(event.currentTarget);
  }, []);

  const handlePopoverClose = React.useCallback(() => {
    dispatch(toggleTablePopover());
    setPopoverAnchor(null);
  }, []);

  const handleItemDelete = React.useCallback(() => {
    dispatch(toggleTablePopover());
    dispatch(deleteUnit(selectedItemId));
  }, [selectedItemId]);

  return (
    <>
      <Typography variant="h1">Единицы измерения</Typography>
      <TableContainer>
        <Table aria-label="units table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Название</TableCell>
              <TableCell>Сокращение</TableCell>
              <TableCell>
                <div className="IconContainer">
                  <MoreHorizRoundedIcon />
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(({ id, name, shortName }, index) => (
              <TableRow key={`${id}_${name}`}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{shortName}</TableCell>
                <TableCell>
                  <IconButton onClick={(event) => handlePopoverOpen(event, id)}>
                    <MoreHorizRoundedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <TablePopover
              open={showTablePopover}
              anchorEl={popoverAnchor}
              onClose={handlePopoverClose}
              onDeleteButtonClick={handleItemDelete} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Units;
