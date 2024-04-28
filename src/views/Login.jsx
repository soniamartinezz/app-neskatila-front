// LoginForm.js
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";

function LoginForm({ setIsLoggedIn }) { // Recibe setIsLoggedIn como prop
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleLogin = async (event) => {
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
                setIsLoggedIn(true); // Actualiza el estado de isLoggedIn
                localStorage.setItem('isLoggedIn', true); // Almacena isLoggedIn en localStorage
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
                            <button className="registro" type="button">Regístrate</button>
                        </Link>
                        <button className="login" type="submit">Iniciar sesión</button>
                    </div>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <Footer />
        </>
    );
}

export default LoginForm;
