import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonLogin({ username, isLogged }) {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(isLogged);

  // Cambios en la prop 'isLogged'
  useEffect(() => {
  }, [isLogged]);
  
  const formatUsername = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isLogged');
    setLoggedIn(false); // Actualizar estado de autenticación localmente
    navigate('/');
  };

  const handleLogin = () => {
    setLoggedIn(true); // Actualizar estado de autenticación localmente
    navigate('/login');
  };

  return (
    <>
      {/* Renderizar el select si estamos logueados */}
      {loggedIn && (
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

      {/* Renderizar el botón de inicio de sesión si no estamos logueados */}
      {!loggedIn ? (
        <button type="button" onClick={handleLogin}>Iniciar sesión</button>
      ) : null}
    </>
  );
}

export default ButtonLogin;
