import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from './components';
import Routes from './routes';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 16px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
`;

const Content = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  margin-left: 32px;
`;

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Navbar />
        <Content>
          <Routes />
        </Content>
      </Router>
    </Wrapper>
  );
};

export default App;
