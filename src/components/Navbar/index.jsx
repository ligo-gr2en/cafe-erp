import React from 'react';
import styled from 'styled-components';
import NavbarNav from './NavbarNav';
import NavListItem from './NavListItem';
import NavbarLink from './NavbarLink';
import Logo from './Logo';
import LogoutButton from './LogoutButton';
import { HomeIcon, ProductIcon, UnitIcon, WalletIcon, TransactionIcon, LogoutIcon } from '../Icons';

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

const Navbar = () => {
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
            <ProductIcon />
          </NavbarLink>
        </NavListItem>
        <NavListItem>
          <NavbarLink to="/units" activeClassName="selected">
            <UnitIcon />
          </NavbarLink>
        </NavListItem>
        <NavListItem>
          <NavbarLink to="/wallets" activeClassName="selected">
            <WalletIcon />
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

export default Navbar;
