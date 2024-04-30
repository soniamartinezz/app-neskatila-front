import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Crea una raíz utilizando el elemento con el ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza tu componente principal dentro de la raíz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
