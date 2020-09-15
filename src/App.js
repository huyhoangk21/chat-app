import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/globalStyles';
import { Route, Switch } from 'react-router-dom';
import { Chat, Login, Signup } from './pages';
import { PrivateRoute } from './components';

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route path='/' exact component={Chat} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
