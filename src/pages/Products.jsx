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
import { deleteProduct } from '../redux/actions/products';
import { toggleTablePopover } from '../redux/actions/ui';

const Products = () => {
  const [popoverAnchor, setPopoverAnchor] = React.useState(null);
  const [selectedItemId, setSelectedItemId] = React.useState();
  
  const dispatch = useDispatch();
  const items = useSelector(({ products }) => products.items);
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
    dispatch(deleteProduct(selectedItemId));
  }, [selectedItemId]);

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

export default Products;
