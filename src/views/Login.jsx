import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";

function LoginForm({ setIsLogged, onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook useNavigate para la navegación

    // Función para controlar el inicio de sesión
    const handleLogin = async (event) => {
        event.preventDefault();

        const lowercaseUsername = username.toLowerCase();
        const lowercasePassword = password.toLowerCase();

        // Verificar si se han completado ambos campos
        if (!username || !password) {
            return;
        }

        // Datos que se van a enviar en la solicitud de inicio de sesión
        const data = { username: lowercaseUsername, password: lowercasePassword };

        try {
            // Solicitud de inicio de sesión al servidor
            const response = await fetch('https://app-neskatila-back-production.up.railway.app/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            // Comprobar el estado de la solicitud
            if (response.ok) {
                onLoginSuccess(username);
                localStorage.setItem('isLogged', true);
                localStorage.setItem('username', username);
                setUsername(''); 
                setIsLogged(true);
                navigate('/traducir');
            } else {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error('Error:', error);
            console.log('Mensaje de error recibido:', error.message);
            if (error.message === 'El nombre de usuario no existe') {
                setError('El usuario ingresado no existe. Por favor, regístrese primero.');
            } else {
                setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
            }
        }
    };

    return (
        <>
            <div className="login">
                <form className="formulario-login" onSubmit={handleLogin}>
                    <div className='username'>
                        <label>Nombre de usuario</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nombre de usuario" required />
                    </div>
                    <div className='password'>
                        <label>Contraseña</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
                    </div>
                    <div className='buttons'>
                        <Link to="/registro">
                            <button className="registro" type="button">Registro</button>
                        </Link>
                        <button className="login" type="submit">Iniciar sesión</button>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </div>
            <Footer />
        </>
    );
}

export default LoginForm;
