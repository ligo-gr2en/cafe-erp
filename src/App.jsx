import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Products, Units, Wallets, Transactions } from './pages';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/units" component={Units} />
          <Route path="/wallets" component={Wallets} />
          <Route path="/transactions" component={Transactions} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
