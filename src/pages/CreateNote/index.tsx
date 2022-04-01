import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import http from '../../services/api';

import { Container } from './styles';
import { useHistory, useParams } from 'react-router-dom';
import { GetJournalProps, Journal } from '../../interfaces/journal.interface';
import Nav from '../../components/Nav';
import TextArea from '../../components/TextArea';
import {
  CreateNoteFormData,
  CreateNoteResponse,
  ParamsProps,
} from '../../interfaces/entry.interface';

const CreateNote: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user, setLoading, signOut } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

  const { journalId } = useParams<ParamsProps>();

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

  useEffect(() => {
    getJournals();
  }, [getJournals]);

  const handleSubmit = useCallback(
    async (data: CreateNoteFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Title is required'),
          content: Yup.string().required('Content is required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setLoading(true);
        const response: CreateNoteResponse = await http.post(
          `/journals/entry/${journalId}`,
          {
            userId: user.id,
            title: data.title,
            content: data.content,
          }
        );

        if (response) {
          addToast({
            type: 'success',
            title: 'Note created',
          });
          history.push(`/journals/${journalId}`);
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          setLoading(false);
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else {
          setLoading(false);
          addToast({
            type: 'error',
            title: 'Error',
            description:
              'An error occurred while creating the new journal. Please try again',
          });
        }
      }
    },
    [addToast, setLoading, user, history, journalId]
  );

  return (
    <>
      <Header />
      <Container>
        {journal && (
          <Nav title={journal.title} linkBack={`/journals/${journalId}`} />
        )}
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="title" placeholder="Title" />
          <TextArea name="content" placeholder="Write your note" />
          <Button type="submit">Save note</Button>
        </Form>
      </Container>
    </>
  );
};

export default CreateNote;
