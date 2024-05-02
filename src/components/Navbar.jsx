import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ButtonLogin from './ButtonLogin';
import ToggleSwitch from './ToggleSwitch';

function Navbar({ darkMode, setDarkMode, username, isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <>
      <div className="header"></div>
      <div className='options-user'>
        <ButtonLogin username={username} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <ToggleSwitch setDarkMode={setDarkMode} darkMode={darkMode} />
      </div>
      <nav className='navbar'>
        <ul>
          <li className={`${activePath === '/' ? "active" : ""}`}>
            <Link to="/">Introducción</Link>
          </li>
          <li className={`${activePath.includes('/codigo') ? "active" : ""}`}>
            <Link to="/codigo">Código</Link>
          </li>
          <li className={`${activePath.includes('/use-rules') ? "active" : ""}`}>
            <Link to="/use-rules">Normas de uso</Link>
          </li>
          <li className={`${activePath.includes('/traducir') ? "active" : ""}`}>
            <Link to="/traducir">Traductor</Link>
          </li>
          <li className={`${activePath.includes('/componentes') ? "active" : ""}`}>
            <Link to="/componentes">Uso en React</Link>
          </li>
          <li className={`${activePath.includes('/versiones') ? "active" : ""}`}>
            <Link to="/versiones">Versiones</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
