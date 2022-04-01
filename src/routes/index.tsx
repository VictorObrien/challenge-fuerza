// eslint-disable-next-line no-use-before-define
import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SingnUp from '../pages/SignUp';
import Journals from '../pages/Journals';
import CreateJournal from '../pages/CreateJournal';
import Notes from '../pages/Notes';
import CreateNote from '../pages/CreateNote';
import NoteContent from '../pages/NoteContent';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SingnUp} />
      <Route path="/journals" exact component={Journals} isPrivate />
      <Route
        path="/journals/create-journal"
        exact
        component={CreateJournal}
        isPrivate
      />
      <Route path="/journals/:journalId" exact component={Notes} isPrivate />
      <Route
        path="/journals/:journalId/create-note"
        exact
        component={CreateNote}
        isPrivate
      />
      <Route
        path="/journals/:journalId/:noteId"
        exact
        component={NoteContent}
        isPrivate
      />
    </Switch>
  );
};

export default Routes;
