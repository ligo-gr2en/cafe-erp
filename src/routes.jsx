import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeScene, ProductsScene, UnitsScene, WalletsScene, TransactionsScene } from './scenes';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScene} />
      <Route path="/products" component={ProductsScene} />
      <Route path="/units" component={UnitsScene} />
      <Route path="/wallets" component={WalletsScene} />
      <Route path="/transactions" component={TransactionsScene} />
    </Switch>
  );
};
