import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterForm() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (confirmPassword) {
      // Validación de contraseña
      if (event.target.value !== confirmPassword) {
        setPasswordError('Las contraseñas no coinciden');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    // Validación de contraseña
    if (password && event.target.value !== password) {
      setPasswordError('Las contraseñas no coinciden');
    } else {
      setPasswordError('');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Validación básica del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(event.target.value)) {
      setError('Ingrese un correo electrónico válido');
    } else {
      setError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validación de contraseña
    if (password !== confirmPassword) {
      setPasswordError('Las contraseñas no coinciden');
      return;
    }
    // Validación básica del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Ingrese un correo electrónico válido');
      return;
    }
    // Aquí podrías enviar los datos del formulario a tu servidor para el registro
    console.log('Password:', password);
    console.log('Email:', email);
    // Limpia los campos después del envío
    setPassword('');
    setConfirmPassword('');
    setEmail('');
    setPasswordError('');
    setError('');
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="Ingrese su contraseña" required />
        </div>
        <div>
          <label>Confirmar Contraseña:</label>
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirme su contraseña" required />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} placeholder="Ingrese su correo electrónico" required />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
    </div>
  );
}

export default RegisterForm;
