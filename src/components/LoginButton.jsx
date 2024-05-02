import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function LoginButton({ username, isLogged }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedIn, setLogged] = useState(isLogged);

  // Cambios en la prop 'isLogged'
  useEffect(() => {
    setLogged(isLogged);
  }, [isLogged]);

  const formatUsername = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isLogged');
    setLogged(false);
    navigate('/');
  };

  const handleLogin = () => {
    setLogged(true); // Actualizar loggedIn
    navigate('/login');
  };

  // Comprobar si estamos en la página de inicio de sesión o de registro
  const isLoginPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {/* Renderizar el select solo si estamos logueados y no estamos en la página de inicio de sesión o registro */}
      {loggedIn && !isLoginPage && (
        <select className="selector" value={username} onChange={handleLogout}>
          <option value={username}>{formatUsername(username)}</option>
          <option value="logout">Cerrar sesión</option>
        </select>
      )}

      {/* Renderizar el botón de inicio de sesión solo si no estamos logueados o estamos en la página de inicio de sesión o registro */}
      {!loggedIn || isLoginPage ? (
        <button type="button" onClick={handleLogin}>Iniciar sesión</button>
      ) : null}
    </>
  );
}

export default LoginButton;
