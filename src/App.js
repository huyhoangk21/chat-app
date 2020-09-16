import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Provider } from 'react-redux';
import store from './redux/store';
import GlobalStyle from './styles/globalStyles';
import { Route, Switch } from 'react-router-dom';
import { Chat, Login, Signup } from './pages';
import { PrivateRoute } from './components';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route path='/' exact component={Chat} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
