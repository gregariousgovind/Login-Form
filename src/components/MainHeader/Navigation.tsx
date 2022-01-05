import React, { useContext } from 'react';

import './Navigation.scss';

import AuthContext from '../../store/auth-context';

const Navigation = () => {
  const ctx = useContext(AuthContext);
  return (
    // <AuthContext.Consumer>
    //   {(ctx) => {
    //     return (
    <nav className="nav">
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    //     );
    //   }}
    // </AuthContext.Consumer>
  );
};

export default Navigation;
