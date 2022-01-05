import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import Login from './src/components/Login/Login';
import Home from './src/components/Home/Home';
import MainHeader from './src/components/MainHeader/MainHeader';

import './style.css';
import AuthContext from './src/store/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');

  useEffect(() => {
    if (storedUserLoggedInInfo) {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler
      }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
};

render(<App />, document.getElementById('root'));
