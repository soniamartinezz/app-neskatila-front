import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ButtonTranslate from "../components/ButtonTranslate";
import ButtonFavorites from "../components/ButtonFavorites";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";

function LoginForm() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');
    const [language, setLanguage] = useState('Español ➔ Euskera');
    const [placeholderText, setPlaceholderText] = useState('Escribe los textos de tu Web');
    const [isLoading, setIsLoading] = useState(false);
    const textAreaRef = useRef(null);
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
                setIsLoggedIn(true);
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

    const handleChangeLanguage = (newLanguage, textButtonValue) => {
        setLanguage(newLanguage);
        setPlaceholderText(textButtonValue === 'Español ➔ Euskera' ? 'Idatzi zure Webgunearen testuak' : 'Escribe los textos de tu Web');
        if(textAreaValue){
            handleTranslate(textButtonValue);
        }
    };

    const handleTextAreaChange = (event) => {
        setTextAreaValue(event.target.value);
    };

    const handleTranslate = async () => {
        const sourceLanguage = language === 'Español ➔ Euskera' ? 'es' : 'eu';
        const targetLanguage = language === 'Español ➔ Euskera' ? 'eu' : 'es';

        setIsLoading(true);

        try {
            const response = await axios.get(`http://localhost:3000/?word=${textAreaRef.current.value}&source=${sourceLanguage}&target=${targetLanguage}`);
            setTextAreaValue(response.data.translated_text);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
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
            <main className="container">
                <section className="content">
                    <h1>neskatila</h1>
                    <p>Demostración visual de como gracias a Neskatila puedes transformar instantáneamente los textos de tu sitio Web o aplicación al euskera, o al español, con solo un clic en un botón de alternancia (toggle). Solo necesitas especificar el idioma de origen de tu Web o app y Neskatila se encargará del resto. Esta demostración te mostrará cómo Neskatila evitará la necesidad de introducir los textos en un segundo idioma en tu programación”</p>
                    <div className="translate">
                        <ButtonTranslate language={handleChangeLanguage} />
                        {isLoggedIn && (
                          <ButtonFavorites />
                        )}
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <textarea ref={textAreaRef} value={textAreaValue} onChange={handleTextAreaChange} placeholder={placeholderText}></textarea>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default LoginForm;
