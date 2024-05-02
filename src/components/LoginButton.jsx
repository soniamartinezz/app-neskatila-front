import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginButton({ username, isLoggedIn }) {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  // Manejar cambios en la prop 'isLoggedIn'
  useEffect(() => {
    setLoggedIn(isLoggedIn);
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn');
    setLoggedIn(false);
    navigate('/');
  };

  const handleLogin = () => {
    // Actualizar el estado loggedIn
    setLoggedIn(true);
    navigate('/login');
  };

  return (
    <>
      {loggedIn && username ? (
        <>
        <select className="selector" value={username} onChange={handleLogout}>
          <option value={username}>{username}</option>
          <option value="logout">Cerrar sesión</option>
        </select>
        <div>
          <p>Tu código: 212312321</p>
          <p>Tu serverURL:</p>
        </div>
        </>
      ) : (
        <button type="button" onClick={handleLogin}>Iniciar sesión</button>
      )}
    </>
  );
}

export default LoginButton;
