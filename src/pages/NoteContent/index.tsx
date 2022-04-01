import React, { useCallback, useEffect, useState } from 'react';

import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

import Header from '../../components/Header';
import http from '../../services/api';

import { Container } from './styles';
import { useParams } from 'react-router-dom';
import Nav from '../../components/Nav';
import {
  Entry,
  GetNotesProps,
  ParamsNoteContentProps,
} from '../../interfaces/entry.interface';

const NoteContent: React.FC = () => {
  const { setLoading, signOut } = useAuth();
  const { addToast } = useToast();

  const { journalId, noteId } = useParams<ParamsNoteContentProps>();

  const [note, setNote] = useState<Entry>();

  const getNotes = useCallback(async () => {
    try {
      setLoading(true);
      const response: GetNotesProps = await http.get(
        `/journals/entries/${journalId}`
      );

      const { entries } = response;

      setNote(entries.find((note) => note.id === noteId));
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
  }, [addToast, setLoading, signOut, journalId, noteId]);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <>
      <Header />
      <Container>
        {note && (
          <>
            <Nav title={note.title} linkBack={`/journals/${journalId}`} />
            <span>{note.content}</span>
          </>
        )}
      </Container>
    </>
  );
};

export default NoteContent;
