import React from 'react';
import Header from '../../components/Header';
import Empty from '../../components/Empty';
import { useAuth } from '../../hooks/Auth';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import Button from '../../components/Button';

const Journals: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <Header>
        {user.journalIds && (
          <Link to="create-journal">
            <Button isOutlined>
              <FiPlus /> Add Journal
            </Button>
          </Link>
        )}
      </Header>
      <Container>
        {!user.journalIds ? <Empty isJournal /> : <h1>{user.journalIds}</h1>}
      </Container>
    </>
  );
};

export default Journals;
