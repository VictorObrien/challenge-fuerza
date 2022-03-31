import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  gap: 0.8rem;

  img {
    max-width: 11rem;
    cursor: pointer;
  }
`;
