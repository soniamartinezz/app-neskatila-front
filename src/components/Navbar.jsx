import { Link, useLocation } from 'react-router-dom';
import LoginButton from './LoginButton';
import ToggleSwitch from './ToggleSwitch';

function Navbar({ darkMode, setDarkMode, username, isLoggedIn }) {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <>
      <div className="header"></div>
      <div className='options-user'>
        <LoginButton username={username} isLoggedIn={isLoggedIn} />
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
          <li className={`${activePath.includes('/normas-uso') ? "active" : ""}`}>
            <Link to="/normas-uso">Normas de uso</Link>
          </li>
          <li className={`${activePath.includes('/traducir') ? "active" : ""}`}>
            <Link to="/traducir">Traductor</Link>
          </li>
          <li className={`${activePath.includes('/componentes') ? "active" : ""}`}>
            <Link to="/componentes">Uso con React</Link>
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
