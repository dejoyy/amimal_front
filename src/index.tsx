import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Импорт Router
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Обернули всё приложение в BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);