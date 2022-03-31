import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariation = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #8bffa0;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div<ContainerProps>`
  max-width: 22.5rem;
  position: relative;
  padding: 1rem 1.875rem 1rem 1rem;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 0.5rem;
  }

  ${(props) => toastTypeVariation[props.type || 'info']}

  > svg {
    margin: 0.25rem 0.75rem 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 0.25rem;
      font-size: 0.875rem;
      opacity: 0.8;
      line-height: 1.25rem;
    }
  }

  button {
    position: absolute;
    right: 1rem;
    top: 1.25rem;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
