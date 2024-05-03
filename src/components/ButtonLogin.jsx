import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ButtonLogin({ username, isLogged }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(isLogged);

  // Cambios en la prop 'isLogged'
  useEffect(() => {
    setLoggedIn(isLogged);
  }, [isLogged]);

  const formatUsername = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isLogged');
    setLoggedIn(false);
    navigate('/');
  };

  const handleLogin = () => {
    setLoggedIn(true); // Actualizar loggedIn
    navigate('/login');
  };

  // Comprobar si estamos en la página de inicio de sesión o de registro
  const isLoginPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {/* Renderizar el select si estamos logueados */}
      {loggedIn && !isLoginPage && (
        <div className='login-options'>
          <select className="selector" value={username} onChange={handleLogout}>
            <option value={username}>{formatUsername(username)}</option>
            <option value="logout">Cerrar sesión</option>
          </select>
          <div className='use-api'>
            <p>Code: <span>212312321</span></p>
            <p>Server: <span>https://app-neskatila-back-production.up.railway.app</span></p>
          </div>
        </div>
      )}

      {/* Renderizar el botón de inicio de sesión si no estamos logueados o estamos en la página de inicio de sesión o registro */}
      {!loggedIn || isLoginPage ? (
        <button type="button" onClick={handleLogin}>Iniciar sesión</button>
      ) : null}
    </>
  );
}

export default ButtonLogin;
