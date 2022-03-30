import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Container } from './styles';

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <Container>
      <Link to="/journals">
        <img src={logo} alt="nocturnal" />
      </Link>
      {children || null}
    </Container>
  );
}
