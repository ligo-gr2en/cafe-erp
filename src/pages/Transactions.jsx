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
import { deleteTransaction } from '../redux/actions/transactions';
import { toggleTablePopover } from '../redux/actions/ui';

const Transactions = () => {
  const [popoverAnchor, setPopoverAnchor] = React.useState(null);
  const [selectedItemId, setSelectedItemId] = React.useState();

  const dispatch = useDispatch();
  const items = useSelector(({ transactions }) => transactions.items);
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
    dispatch(deleteTransaction(selectedItemId));
  }, [selectedItemId]);

  return (
    <>
      <Typography variant="h1">Транзакции</Typography>
      <TableContainer>
        <Table aria-label="transactions table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Кошелек</TableCell>
              <TableCell>Значение</TableCell>
              <TableCell>Тип операции</TableCell>
              <TableCell>Время</TableCell>
              <TableCell>
                <div className="IconContainer">
                  <MoreHorizRoundedIcon />
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(({ id, wallet, value, type, time }, index) => (
              <TableRow key={`${id}_${wallet}`}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{wallet}</TableCell>
                <TableCell>{value}</TableCell>
                <TableCell>{type}</TableCell>
                <TableCell>{time}</TableCell>
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

export default Transactions;
