import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isOutlined: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: var(--primary-color);
  height: 2.5rem;
  border-radius: 40px;
  border: 0;
  padding: 0 1rem;
  max-width: 10rem;
  color: #fff;
  font-weight: 600;
  margin-top: 2.5rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#834825')};
  }

  ${({ isOutlined }) =>
    isOutlined &&
    css`
      width: max-content;
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
      background-color: var(--background-color);
      margin: 0 auto;

      &:hover {
        color: var(--background-color);
      }
    `}
`;
