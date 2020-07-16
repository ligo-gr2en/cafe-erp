import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Routes from './routes';

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Content = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-left: 32px;
  margin-right: 16px;
  margin-bottom: 16px;
`;

const App = (props) => {
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
