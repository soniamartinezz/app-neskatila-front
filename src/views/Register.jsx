import { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== password2) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('https://app-neskatila-back-production.up.railway.app/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (response.ok) {
        alert('Usuario registrado exitosamente');
        setUsername('');
        setPassword('');
        setPassword2('');
        setError('');
      } else {
        if (response.status === 400) {
          const errorMessage = await response.text();
          setError(errorMessage);
        } else {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error al conectar con el servidor');
    }
  };
  

  return (
    <>
      <div className='registro'>
        <form className="formulario-registro" onSubmit={handleSubmit}>
          <div className='username'>
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              placeholder='Nombre de usuario'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='password'>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder='Contraseña'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='password'>
            <label htmlFor="password2">Contraseña</label>
            <input
              type="password"
              id="password2"
              value={password2}
              placeholder='Vuelve a escribir la contraseña'
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </div>
          <div className='buttons'>
            <button className="registro" type="submit">Regístrate</button>
            <Link to="/login">
              <button className="login" type="button">Inicia sesión</button>
            </Link>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
