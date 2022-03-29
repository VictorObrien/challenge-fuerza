// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

const Loading: React.FC = () => (
  <Container>
    <ReactLoading type="bars" color="#834825" width="5%" height="5%" />
  </Container>
);

export default Loading;
