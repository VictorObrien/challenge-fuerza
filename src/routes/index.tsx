// eslint-disable-next-line no-use-before-define
import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SingnUp from '../pages/SignUp';
import Journals from '../pages/Journals';
import CreateJournal from '../pages/CreateJournal';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SingnUp} />
      <Route path="/journals" exact component={Journals} isPrivate />
      <Route path="/create-journal" exact component={CreateJournal} isPrivate />
    </Switch>
  );
};

export default Routes;
