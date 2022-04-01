import React from 'react';
import { Link } from 'react-router-dom';
import empty from '../../assets/empty .svg';

import { Container } from './styles';

interface EmptyProps {
  isJournal?: boolean;
}

const Empty: React.FC<EmptyProps> = ({ isJournal, children }) => {
  return (
    <Container>
      <img src={empty} alt="logo" />
      {isJournal && <Link to="/journals/create-journal">Create a journal</Link>}
      {children}
    </Container>
  );
};

export default Empty;
