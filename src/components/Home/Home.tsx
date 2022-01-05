import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import './Home.scss';
import AuthContext from '../../store/auth-context';

const Home = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Card className="home">
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
