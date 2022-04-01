import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setupServer } from './services/mirage/server';

if (process.env.NODE_ENV === 'production') {
  setupServer();
}
console.log(process.env.NODE_ENV);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
