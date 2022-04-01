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

    position: relative;

    div {
      width: 100%;

      height: 165px;

      padding: 0.5rem;

      font-size: 1.5rem;
      overflow: auto;
      background: #faf2ec;
      color: #333438;

      box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.12);
      border-radius: 4px;

      z-index: 2;

      word-break: break-all;
    }

    &:after {
      position: absolute;
      top: 4px;
      left: -3px;

      width: 100%;
      height: 100%;

      background: #faf2ec;
      color: #333438;

      border-radius: 4px;

      word-break: break-all;

      content: '';

      z-index: 1;
    }
  }

  @media (min-width: 720px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    justify-content: center;
  }
`;
