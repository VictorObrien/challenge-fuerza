import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 1080px;

  a {
    margin-top: 80px;
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-color);
  }
`;
