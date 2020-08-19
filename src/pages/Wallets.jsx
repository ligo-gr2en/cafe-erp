import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '../components';

const items = [
  { id: 0, type: 'Наличный', balance: '82450' },
  { id: 1, type: 'Безналичный', balance: '42500' },
  { id: 2, type: 'Перевод', balance: '1000' },
];

const Wallets = () => {
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
                  <IconButton>
                    <MoreHorizRoundedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Wallets;
