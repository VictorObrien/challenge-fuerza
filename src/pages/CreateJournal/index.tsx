import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
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
import { useHistory } from 'react-router-dom';
import {
  CreateJournalFormData,
  CreateJournalResponse,
} from '../../interfaces/journal.interface';

const CreateJournal: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user, setLoading, updateUserJournals } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

  const [journalTitle, setJournalTitle] = useState('');

  const handleSubmit = useCallback(
    async (data: CreateJournalFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Title is required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setLoading(true);
        const response: CreateJournalResponse = await http.post('/journals', {
          userId: user.id,
          title: data.title,
        });

        if (response) {
          updateUserJournals(response.user);
          addToast({
            type: 'success',
            title: 'Journal created',
          });
          history.push('/journals');
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
    [addToast, setLoading, user, history, updateUserJournals]
  );

  return (
    <>
      <Header />
      <Container>
        <div>
          <div />
          <div>
            <p>{journalTitle}</p>
          </div>
        </div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="title"
            placeholder="Title"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setJournalTitle(e.target.value);
            }}
          />
          <Button type="submit">Save journal</Button>
        </Form>
      </Container>
    </>
  );
};

export default CreateJournal;
