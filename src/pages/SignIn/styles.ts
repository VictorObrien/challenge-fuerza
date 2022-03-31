import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: end;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 4.875rem 0;
    width: 20rem;
    text-align: center;

    div + div {
      margin-top: 1.5rem;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  a {
    font-size: 12px;
    font-weight: 600;
    color: var(--primary-color);
  }
`;
