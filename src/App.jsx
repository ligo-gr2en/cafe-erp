import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Home, Products, Units, Wallets, Transactions } from './pages';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/units" component={Units} />
          <Route path="/wallets" component={Wallets} />
          <Route path="/transactions" component={Transactions} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
