import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { Home, Products, Units, Wallets, Transactions } from './pages';
import { Navbar } from './components';
import store from './redux/store';
import theme from './theme';

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
