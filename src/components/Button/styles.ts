import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--primary-color);
  height: 40px;
  border-radius: 40px;
  border: 0;
  padding: 0 16px;
  width: 161px;
  color: #fff;
  font-weight: 600;
  margin-top: 40px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#834825')};
  }
`;
