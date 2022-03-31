import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  width: 100%;
  max-width: 720px;
  height: 0;
`;

export const List = styled.ul`
  display: grid;
  justify-content: center;
  flex: 1;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  width: 100%;

  padding: 1rem 0;

  max-height: 550px;

  list-style-type: none;

  border-radius: 8px;

  a {
    width: 144px;

    &:nth-child(odd) li {
      background: #b8e5e3;
    }
    &:nth-child(even) li {
      background: #3b4e8d;

      color: #fff;
    }
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 170px;

    border-radius: 2px 16px 16px 2px;

    font-family: 'Abhaya Libre', serif;
    background-color: var(--background-color);
    box-shadow: inset -2px -2px 2px rgba(0, 0, 0, 0.1);

    overflow: hidden;

    div:first-child {
      height: 100%;
      width: 11px;

      background: #5091d6;

      border-radius: 2px 0px 0px 2px;

      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    div:last-child {
      flex: 1;
      padding: 0.8rem;

      font-size: 24px;
      font-weight: 700;

      text-align: center;
      word-break: break-all;
    }
  }

  @media (min-width: 720px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    justify-content: center;
  }
`;
