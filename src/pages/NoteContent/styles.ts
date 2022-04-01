import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;

  gap: 2.5rem;

  span {
    background: rgba(256, 256, 256, 0.5);
    border: 0;
    color: var(--primary-color);
    font-size: 0.75rem;
    font-weight: 700;
    height: 300px;
    border-radius: 4px;
    padding: 1rem;
    width: 100%;
    margin: 5rem auto;
  }
`;

export const Content = styled.div`
  width: 15rem;
  height: 20.25rem;
`;
