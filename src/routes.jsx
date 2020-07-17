import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { HomeScene, ProductsScene, UnitsScene, WalletsScene, TransactionsScene } from './scenes';

const Content = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  margin-left: 32px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, .02);
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .08);
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, .16);
  }
`;

export default () => {
  return (
    <Route render={({ location }) => (
      <TransitionGroup component={Content}>
        <CSSTransition
          timeout={450}
          classNames="fade"
          key={location.pathname}>
          <Switch location={location}>
            <Route exact path="/" component={HomeScene} />
            <Route path="/products" component={ProductsScene} />
            <Route path="/units" component={UnitsScene} />
            <Route path="/wallets" component={WalletsScene} />
            <Route path="/transactions" component={TransactionsScene} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  );
};
