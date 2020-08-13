import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import StraightenRoundedIcon from '@material-ui/icons/StraightenRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import { ButtonBase } from '@material-ui/core';
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
        <nav className="Navbar">
          <ul className="Nav">
            <li className="Nav-Item">
              <ButtonBase
                exact
                to="/"
                className="Nav-Link"
                activeClassName="Nav-Link_active"
                component={NavLink}>
                <HomeRoundedIcon />
              </ButtonBase>
            </li>
            <li className="Nav-Item">
              <ButtonBase
                to="/products"
                className="Nav-Link"
                activeClassName="Nav-Link_active"
                component={NavLink}>
                <CategoryRoundedIcon />
              </ButtonBase>
            </li>
            <li className="Nav-Item">
              <ButtonBase
                to="/units"
                className="Nav-Link"
                activeClassName="Nav-Link_active"
                component={NavLink}>
                <StraightenRoundedIcon />
              </ButtonBase>
            </li>
            <li className="Nav-Item">
              <ButtonBase
                to="/wallets"
                className="Nav-Link"
                activeClassName="Nav-Link_active"
                component={NavLink}>
                <AccountBalanceWalletRoundedIcon />
              </ButtonBase>
            </li>
            <li className="Nav-Item">
              <ButtonBase
                to="/transactions"
                className="Nav-Link"
                activeClassName="Nav-Link_active"
                component={NavLink}>
                <AttachMoneyRoundedIcon />
              </ButtonBase>
            </li>
          </ul>
        </nav>
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
