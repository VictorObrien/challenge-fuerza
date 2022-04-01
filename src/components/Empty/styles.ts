import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;

  gap: 6rem;

  div {
    font-family: 'Abhaya Libre', serif;
    font-size: 25px;
    font-weight: 700;
  }

  img {
    width: 100%;
    max-width: 400px;
  }

  a {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--primary-color);
  }
`;
