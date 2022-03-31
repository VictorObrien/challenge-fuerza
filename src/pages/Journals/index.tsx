import React, { useCallback, useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Empty from '../../components/Empty';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

import { Journal } from '../../interfaces/journal.interface';
import http from '../../services/api';

import { Container, List } from './styles';

interface GetJournalProps {
  journals: Journal[];
}

const Journals: React.FC = () => {
  const { user, setLoading, signOut } = useAuth();
  const { addToast } = useToast();
  const [journals, setJournals] = useState<Journal[]>();

  const getJournals = useCallback(async () => {
    try {
      setLoading(true);
      const response: GetJournalProps = await http.get(`/journals/${user.id}`);

      const { journals } = response;

      setJournals(journals);
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
  }, [addToast, setLoading, signOut, user]);

  useEffect(() => {
    getJournals();
  }, [getJournals]);

  return (
    <>
      <Header>
        {journals?.length && (
          <Link to="create-journal">
            <Button isOutlined>
              <FiPlus /> Add Journal
            </Button>
          </Link>
        )}
      </Header>
      <Container>
        {journals?.length ? (
          <List>
            {journals?.map((journal) => (
              <Link to={`/journals/${journal.id}`} key={journal.id}>
                <li>
                  <div />
                  <div>{journal.title}</div>
                </li>
              </Link>
            ))}
          </List>
        ) : (
          <Empty isJournal />
        )}
      </Container>
    </>
  );
};

export default Journals;
