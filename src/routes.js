import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './scenes/Home';
import Products from './scenes/Products';
import Units from './scenes/Units';
import Wallets from './scenes/Wallets';
import Transactions from './scenes/Transactions';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/units" component={Units} />
      <Route path="/wallets" component={Wallets} />
      <Route path="/transactions" component={Transactions} />
    </Switch>
  );
};
