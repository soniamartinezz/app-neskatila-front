import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonLogin({ isLogged, setIsLogged }) {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(isLogged);
  const [username, setUsername] = useState('');

  // Función para obtener el nombre de usuario del almacenamiento local
  const getUsernameFromStorage = () => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  };

  // Efecto para actualizar el nombre de usuario cuando el estado de isLogged cambia
  useEffect(() => {
    if (isLogged) {
      getUsernameFromStorage();
    }
    setLoggedIn(isLogged);
  }, [isLogged]);

  console.log('username: ' + username);
  const formatUsername = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isLogged');
    setLoggedIn(false);
    setIsLogged(false);
    setUsername('');
    navigate('/');
  };

  return (
    <>
      {/* Renderizar el select si se ha iniciado sesión */}
      {loggedIn ? (
        <div className='login-options'>
          <select className="selector" value={username} onChange={handleLogout}>
            <option value="">{formatUsername(username)}</option>
            <option value="logout">Cerrar sesión</option>
          </select>
          <div className='use-api'>
            <p>Code: <span>212312321</span></p>
            <p>Server: <span>https://app-neskatila-back-production.up.railway.app</span></p>
          </div>
        </div>
      ) : (
        // Renderizar el botón si no se ha iniciado sesión
        <button type="button" onClick={() => navigate('/login')}>Iniciar sesión</button>
      )}
    </>
  );
}

export default ButtonLogin;
