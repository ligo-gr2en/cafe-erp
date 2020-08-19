import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '../components';

const items = [
  { id: 0, name: 'Штук', shortName: 'шт.' },
];

const Units = () => {
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

export default Units;
