import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
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
    margin: 78px 0;
    width: 320px;
    text-align: center;

    div + div {
      margin-top: 24px;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 24px;

  a {
    font-size: 12px;
    font-weight: 600;
    color: var(--primary-color);
  }
`;
