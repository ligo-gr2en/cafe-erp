import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '../components';

const items = [
  { id: 0, wallet: 'Безналичный', value: '200', type: 'Приход', time: '07.07.2020 18:56:23' },
  { id: 1, wallet: 'Безналичный', value: '15500', type: 'Приход', time: '08.07.2020 19:07:20' },
  { id: 2, wallet: 'Наличный', value: '800', type: 'Расход', time: '08.07.2020 13:00:49' },
  { id: 3, wallet: 'Перевод', value: '395', type: 'Приход', time: '10.07.2020 09:36:07' },
];

const Transactions = () => {
  return (
    <>
      <Typography variant="h1">Транзакции</Typography>
      <TableContainer>
        <Table>
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

export default Transactions;
