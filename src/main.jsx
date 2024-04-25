import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

function Main() {
  const [ isDark, setIsDark ] = useState(true);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  const rootClass = `root ${isDark ? 'dark' : 'light'}`;

  return (
    <React.StrictMode>
      <div id="root" className={rootClass}>
        <App handleClick={handleClick} isDark={isDark} />
      </div>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
);