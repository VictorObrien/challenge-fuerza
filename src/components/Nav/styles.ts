import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 12px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Abhaya Libre', serif;
    font-size: 25px;
    font-weight: 700;

    img {
      margin-right: 19px;
    }

    div {
      width: 100px;

      white-space: nowrap;

      overflow: hidden;

      text-overflow: ellipsis;
    }

    svg {
      height: 22px;

      width: 22px;
    }
  }
`;
