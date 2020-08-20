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
import { deleteWallet } from '../redux/actions/wallets';
import { toggleTablePopover } from '../redux/actions/ui';

const Wallets = () => {
  const [popoverAnchor, setPopoverAnchor] = React.useState(null);
  const [selectedItemId, setSelectedItemId] = React.useState();

  const dispatch = useDispatch();
  const items = useSelector(({ wallets }) => wallets.items);
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
    dispatch(deleteWallet(selectedItemId));
  }, [selectedItemId]);

  return (
    <>
      <Typography variant="h1">Кошельки</Typography>
      <TableContainer>
        <Table aria-label="wallets table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Тип</TableCell>
              <TableCell>Баланс</TableCell>
              <TableCell>
                <div className="IconContainer">
                  <MoreHorizRoundedIcon />
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(({ id, type, balance }, index) => (
              <TableRow key={`${id}_${type}`}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{type}</TableCell>
                <TableCell>{balance}</TableCell>
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

export default Wallets;
