import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginButton({ username, isLoggedIn }) {
  const navigate = useNavigate();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(isLoggedIn);

  // Manejar cambios en el estado de autenticación
  useEffect(() => {
    setIsUserLoggedIn(isLoggedIn);
  }, [isLoggedIn]);

  const handleLogoutClick = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === "logout") {
      localStorage.removeItem('username');
      localStorage.removeItem('isLoggedIn');
      navigate('/');
      console.log('salir');
      setIsUserLoggedIn(false); // Actualizar el estado local al cerrar sesión
    }
  };

  return (
    <>
      {isUserLoggedIn ? (
        <select className="selector" defaultValue={username} onChange={handleLogoutClick}>
          <option value={username}>{username}</option>
          <option value="logout">Cerrar sesión</option>
        </select>
      ) : (
        <button type="button" onClick={() => navigate('/login')}>Iniciar sesión</button>
      )}
    </>
  );
}

export default LoginButton;
