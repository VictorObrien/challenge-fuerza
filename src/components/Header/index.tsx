import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/journals">
        <img src={logo} alt="nocturnal" />
      </Link>
    </Container>
  );
}
