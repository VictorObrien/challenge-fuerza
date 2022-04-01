import React from 'react';
import { Link } from 'react-router-dom';

import leftArrow from '../../assets/left-arrow.svg';

import { Container } from './styles';

interface NavProps {
  linkBack: string;
  title: string;
}

const Nav: React.FC<NavProps> = ({ children, linkBack, title }) => {
  return (
    <Container>
      <Link to={linkBack}>
        <img src={leftArrow} alt="left arrow" />

        <div>{title}</div>
      </Link>

      {children}
    </Container>
  );
};

export default Nav;
