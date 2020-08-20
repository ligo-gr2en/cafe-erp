import { combineReducers } from 'redux';
import ui from './ui';
import products from './products';
import units from './units';
import wallets from './wallets';
import transactions from './transactions';

const rootReducer = combineReducers({
  ui,
  products,
  units,
  wallets,
  transactions,
});

export default rootReducer;
