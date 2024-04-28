import { Link, useLocation } from 'react-router-dom';
import LoginButton from './LoginButton';
import ToggleSwitch from './ToggleSwitch';

function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <>
      <div className="header"></div>
      <LoginButton />
      <ToggleSwitch setDarkMode={setDarkMode} darkMode={darkMode} />
      <nav className='navbar'>
        <ul>
          <li className={`${activePath === '/' ? "active" : ""}`}>
            <Link to="/">Introducción</Link>
          </li>
          <li className={`${activePath.includes('/traducir') ? "active" : ""}`}>
            <Link to="/traducir">Prueba el traductor</Link>
          </li>
          <li className={`${activePath.includes('/normas-uso') ? "active" : ""}`}>
            <Link to="/normas-uso">Normas de uso</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
