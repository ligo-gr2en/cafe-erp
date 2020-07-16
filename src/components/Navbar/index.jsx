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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 96px;
  height: 100%;
  padding-top: 36px;
  padding-bottom: 36px;
  background-color: #2a2d34;
  border-radius: 24px;
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
