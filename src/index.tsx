import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';

const render = () => {
   const container = document.getElementById('root');
   if (container) {
      const root = ReactDOMClient.createRoot(container);
      root.render(<App />);
   }
};

render();
