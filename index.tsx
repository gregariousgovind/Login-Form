import React, { Fragment, useContext } from 'react';
import { render } from 'react-dom';

import Login from './src/components/Login/Login';
import Home from './src/components/Home/Home';
import MainHeader from './src/components/MainHeader/MainHeader';

import './style.css';
import AuthContext, { AuthContextProvider } from './src/store/auth-context';

const App = () => {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
};

render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root')
);
