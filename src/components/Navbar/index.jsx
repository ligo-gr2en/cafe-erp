import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import StraightenRoundedIcon from '@material-ui/icons/StraightenRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
