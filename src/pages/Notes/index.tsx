import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Header from '../../components/Header';
import Empty from '../../components/Empty';

import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

import {
  Entry,
  GetNotesProps,
  ParamsProps,
} from '../../interfaces/entry.interface';
import http from '../../services/api';

import { Container, List } from './styles';
import { GetJournalProps, Journal } from '../../interfaces/journal.interface';
import Nav from '../../components/Nav';
import Button from '../../components/Button';
import { FiPlus } from 'react-icons/fi';

const Notes: React.FC = () => {
  const { user, setLoading, signOut } = useAuth();
  const { addToast } = useToast();

  const { journalId } = useParams<ParamsProps>();
  const [notes, setNotes] = useState<Entry[]>();

  const [journal, setJournal] = useState<Journal>();

  const getJournals = useCallback(async () => {
    try {
      setLoading(true);
      const response: GetJournalProps = await http.get(`/journals/${user.id}`);

      const { journals } = response;

      setJournal(journals.find((journal) => journal.id === journalId));
    } catch (error) {
      signOut();
      setLoading(false);
      addToast({
        type: 'error',
        title: 'Error',
        description:
          'An error occurred while getting the journals. Please sign up and sign in again',
      });
    }
    setLoading(false);
  }, [addToast, setLoading, signOut, user, journalId]);

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

  useEffect(() => {
    getJournals();
  }, [getJournals]);

  return (
    <>
      <Header />
      <Container>
        {journal &&
          (notes?.length ? (
            <>
              <Nav title={journal.title} linkBack={'/journals'}>
                <Link to={`/journals/${journalId}/create-note`}>
                  <Button
                    isOutlined
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <FiPlus />
                    <span>Add note</span>
                  </Button>
                </Link>
              </Nav>
              <List>
                {notes?.map((note) => (
                  <Link to={`/journals/${journalId}/${note.id}`} key={note.id}>
                    <li>
                      <div>{note.title}</div>
                    </li>
                  </Link>
                ))}
              </List>
            </>
          ) : (
            <>
              <Empty journalTitle={journal.title}>
                <Link to={`/journals/${journalId}/create-note`}>
                  Create a note
                </Link>
              </Empty>
            </>
          ))}
      </Container>
    </>
  );
};

export default Notes;
