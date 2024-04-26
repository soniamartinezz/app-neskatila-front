import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Mover useNavigate aquí

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { username, password };

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigate('/normas-uso'); // Utilizar navigate aquí
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
      console.log('Mensaje de error recibido:', error.message); // Agregar esta línea para imprimir el mensaje de error recibido
      if (error.message === 'El nombre de usuario no existe') {
        setError('El usuario ingresado no existe. Por favor, regístrese primero.');
      } else {
        setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} placeholder="Ingrese su nombre de usuario" required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="Ingrese su contraseña" required />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <Link to="/registro">
        <button type="button">Registrarse</button>
      </Link>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default LoginForm;
