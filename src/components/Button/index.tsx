// eslint-disable-next-line no-use-before-define
import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOutlined: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isOutlined, ...rest }) => (
  <Container isOutlined={isOutlined} type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
