import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Container } from './styles';

const Header: React.FC = ({ children }) => (
  <Container>
    <Link to="/journals">
      <img src={logo} alt="nocturnal" />
    </Link>
    {children || null}
  </Container>
);

export default Header;
