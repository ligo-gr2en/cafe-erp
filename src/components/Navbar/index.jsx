import React from 'react';
import styled from 'styled-components';
import NavbarNav from './NavbarNav';
import NavListItem from './NavListItem';
import NavbarLink from './NavbarLink';
import Logo from './Logo';
import LogoutButton from './LogoutButton';
import HomeIcon from '../Icons/Home';
import ProductsIcon from '../Icons/Products';
import UnitsIcon from '../Icons/Units';
import WalletsIcon from '../Icons/Wallets';
import TransactionIcon from '../Icons/Transaction';
import LogoutIcon from '../Icons/Logout';

const Container = styled.div`
  height: 100%;
  width: 96px;
  box-sizing: border-box;
  padding-top: 36px;
  padding-bottom: 36px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #2A2D34;
`;

export default () => {
  return (
    <Container>
      <Logo />

      <NavbarNav>
        <NavListItem>
          <NavbarLink exact to="/" activeClassName="selected">
            <HomeIcon />
          </NavbarLink>
        </NavListItem>
        <NavListItem>
          <NavbarLink to="/products" activeClassName="selected">
            <ProductsIcon />
          </NavbarLink>
        </NavListItem>
        <NavListItem>
          <NavbarLink to="/units" activeClassName="selected">
            <UnitsIcon />
          </NavbarLink>
        </NavListItem>
        <NavListItem>
          <NavbarLink to="/wallets" activeClassName="selected">
            <WalletsIcon />
          </NavbarLink>
        </NavListItem>
        <NavListItem>
          <NavbarLink to="/transactions" activeClassName="selected">
            <TransactionIcon />
          </NavbarLink>
        </NavListItem>
      </NavbarNav>

      <LogoutButton>
        <LogoutIcon />
      </LogoutButton>
    </Container>
  );
};
