import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '../components';

const items = [
  { id: 0, name: 'Эспрессо', unit: 'штук', price: 500 },
  { id: 1, name: 'Американо', unit: 'штук', price: 500 },
  { id: 2, name: 'Капучино', unit: 'штук', price: 700 },
  { id: 3, name: 'Флэт Уайт', unit: 'штук', price: 700 },
];

const Products = () => {
  return (
    <>
      <Typography variant="h1">Продукты</Typography>
      <TableContainer>
        <Table aria-label="products table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Название</TableCell>
              <TableCell>Единица измерения</TableCell>
              <TableCell>Цена</TableCell>
              <TableCell>
                <div className="IconContainer">
                  <MoreHorizRoundedIcon />
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(({ id, name, unit, price }, index) => (
              <TableRow key={`${id}_${name}`}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{unit}</TableCell>
                <TableCell>{price}</TableCell>
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

export default Products;
