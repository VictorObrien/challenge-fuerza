import React from 'react';
import Header from '../../components/Header';
import Empty from '../../components/Empty';
import { useAuth } from '../../hooks/Auth';
import { Container } from './styles';

const Journals: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <Container>
        {!user.journalIds ? <Empty isJournal /> : <h1>{user.username}</h1>}
      </Container>
    </>
  );
};

export default Journals;
