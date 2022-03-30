import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;

  > div {
    display: flex;
    justify-content: center;
    gap: 1rem;
    position: relative;
    width: 100%;
    height: 20.75rem;
    max-width: 15rem;
    font-family: 'Abhaya Libre', serif;
    font-weight: 700;
    font-size: 2rem;
    border-radius: 2px 16px 16px 2px;
    background-color: #f8e5d6;
    box-shadow: inset 0px 2px 2px rgba(255, 255, 255, 0.25),
      inset -4px -4px 2px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    > div:first-child {
      width: 40px;
      border-radius: 2px 0px 0px 2px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    > div:last-child {
      display: flex;
      align-items: center;
      flex: 1;
      padding: 0.8rem;
      word-break: break-word;
      overflow: auto;
      p {
        margin: auto;
      }
    }
  }

  form {
    margin: 78px 0;
    width: 720px;
    text-align: center;
  }
`;

export const Content = styled.div`
  width: 240px;
  height: 324px;
`;
