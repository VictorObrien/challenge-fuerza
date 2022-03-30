import styled, { css } from 'styled-components';

import Tooltip from '../Tooltpip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: rgba(256, 256, 256, 0.5);
  border-radius: 4px;
  padding: 16px;
  width: 100%;
  height: 40px;

  border: 1px solid rgba(256, 256, 256, 0.5);
  color: var(--primary-color);

  display: flex;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border: 1px solid #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border: 1px solid #b8e5e3;
      color: var(--primary-color);
      font-weight: 400;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--primary-color);
    `}

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--primary-color);
    font-size: 12px;
    font-weight: 700;

    &::placeholder {
      color: var(--primary-color);
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background-color: #c53030;

    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
