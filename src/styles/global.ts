import { createGlobalStyle } from 'styled-components';
import homeBackground from '../assets/background.svg';

export default createGlobalStyle`
  :root {
  --primary-color: #834825;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background:  url(${homeBackground}) no-repeat left #F8E5D6;
    -webkit-font-smoothing: antialiased;
    color: var(--text-color);
    /* overflow: hidden; */
  }

  body,
  input,
  button {
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  input, select :focus-visible {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--primary-color);
    font-family: Montserrat;
    font-weight: 500;
  }
  
  button {
    cursor: pointer;
  }
`;