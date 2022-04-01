import React from 'react';
import { Link } from 'react-router-dom';
import empty from '../../assets/empty .svg';

import { Container } from './styles';

interface EmptyProps {
  isJournal?: boolean;
  journalTitle?: string;
}

const Empty: React.FC<EmptyProps> = ({ isJournal, journalTitle, children }) => {
  return (
    <Container>
      {journalTitle && <div>{journalTitle}</div>}
      <img src={empty} alt="logo" />
      {isJournal && <Link to="/journals/create-journal">Create a journal</Link>}
      {children}
    </Container>
  );
};

export default Empty;
