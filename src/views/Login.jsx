import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Ingrese un correo electrónico válido');
    } else {
      setEmailError('');
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // Validación de la contraseña
    if (event.target.value.trim() === '') {
      setPasswordError('Ingrese su contraseña');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de la contraseña
    if (password.trim() === '') {
      setPasswordError('Ingrese su contraseña');
      return;
    } else {
      setPasswordError('');
    }

    // Aquí podrías agregar la lógica para iniciar sesión, como enviar los datos al servidor
    console.log('Email:', email);
    console.log('Password:', password);

    // Limpia los campos después del envío
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} placeholder="Ingrese su correo electrónico" required />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="Ingrese su contraseña" required />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <Link to="/register">
        <button type="button">Registrarse</button>
      </Link>
    </div>
  );
}

export default LoginForm;
