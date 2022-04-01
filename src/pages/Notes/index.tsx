import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Header from '../../components/Header';
import Empty from '../../components/Empty';

import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

import { Entry } from '../../interfaces/entry.interface';
import http from '../../services/api';

import { Container, List } from './styles';

interface GetNotesProps {
  entries: Entry[];
}

interface ParamsProps {
  journalId: string;
}

const Notes: React.FC = () => {
  const { setLoading, signOut } = useAuth();
  const { addToast } = useToast();

  const { journalId } = useParams<ParamsProps>();
  const [notes, setNotes] = useState<Entry[]>();

  const getNotes = useCallback(async () => {
    try {
      setLoading(true);
      const response: GetNotesProps = await http.get(
        `/journals/entries/${journalId}`
      );

      const { entries } = response;

      setNotes(entries);
    } catch (error) {
      signOut();
      setLoading(false);
      addToast({
        type: 'error',
        title: 'Error',
        description:
          'An error occurred while getting the notes. Please sign up and sign in again',
      });
    }
    setLoading(false);
  }, [addToast, setLoading, signOut, journalId]);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <>
      <Header />
      <Container>
        {notes?.length ? (
          <List>
            {notes?.map((note) => (
              <Link to={`/journals/${journalId}/${note.id}`} key={note.id}>
                <li>
                  <div />
                  <div>{note.title}</div>
                </li>
              </Link>
            ))}
          </List>
        ) : (
          <Empty>
            <Link to={`/journals/${journalId}/create-note`}>Create a note</Link>
          </Empty>
        )}
      </Container>
    </>
  );
};

export default Notes;
