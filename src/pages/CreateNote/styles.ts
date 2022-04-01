import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;

  form {
    margin: 4.875rem 0;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    gap: 2rem;
  }
`;

export const Content = styled.div`
  width: 15rem;
  height: 20.25rem;
`;
