// eslint-disable-next-line no-use-before-define
import React from 'react';

import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';

import SignIn from '../pages/SignIn';
import SingnUp from '../pages/SignUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <PublicRoute path="/" exact component={SignIn} />
      <PublicRoute path="/signup" exact component={SingnUp} />
    </Switch>
  );
};

export default Routes;
