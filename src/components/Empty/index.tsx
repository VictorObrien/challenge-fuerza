import React from 'react';
import { Link } from 'react-router-dom';
import empty from '../../assets/empty .svg';

import { Container } from './styles';

interface EmptyProps {
  isJournal?: boolean;
}

const Empty: React.FC<EmptyProps> = ({ isJournal }) => {
  return (
    <Container>
      <img src={empty} alt="logo" />
      {isJournal ? (
        <Link to="/create-journal">Create a journal</Link>
      ) : (
        <Link to="/create-note">Create a note</Link>
      )}
    </Container>
  );
};

export default Empty;
