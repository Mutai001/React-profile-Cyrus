// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './assets/styles/main.scss';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/main.scss';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

