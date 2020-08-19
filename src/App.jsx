import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { Home, Products, Units, Wallets, Transactions } from './pages';
import { Navbar } from './components';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <main className="Content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/units" component={Units} />
            <Route path="/wallets" component={Wallets} />
            <Route path="/transactions" component={Transactions} />
          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
