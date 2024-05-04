import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Translate from './views/Translate';
import UseRules from './views/UseRules';
import LoginForm from './views/Login';
import RegisterForm from './views/Register';
import SavedTranslations from './views/SavedTranslations';
import Code from './views/Code.jsx';
import TranslateLibrary from './views/TranslateLibrary.jsx';
import Versions from './views/Versions.jsx';
import './App.css';

import { initNeskatila } from './lib/index.js';
const API_KEY = "212312321"; // Válido

initNeskatila({ apiKey: API_KEY, serverURL: 'https://app-neskatila-back-production.up.railway.app' })

function App() {
  const [darkMode, setDarkMode] = useState(true); // Controla el modo oscuro de la app
  const [isLogged, setIsLogged] = useState(false); // Comprobar si se ha iniciado sesión
  const [username, setUsername] = useState(""); // Guardar el username del usuario

  // Función para cambiar el modo oscuro / modo claro (componente Navbar)
  const handleChangeMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Comprobar si se ha guardado un 'username' en localStorage
    const storedUsername = localStorage.getItem('username');

    // Si hay un username guardado, cambiar el estado de 'username' y de 'isLogged'
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLogged(true);
    }
  }, []);

  // Función para controlar el inicio de sesión (componente Login)
  const handleLoginSuccess = (username) => {
    setUsername(username);
    setIsLogged(true);
    localStorage.setItem('username', username);
    localStorage.setItem('isLogged', true);
  };

  return (
    <div id="root" className={`root ${darkMode ? 'dark' : 'light'}`}>
      <Router>
        <Navbar handleChangeMode={handleChangeMode} darkMode={darkMode} setDarkMode={setDarkMode} username={username} isLogged={isLogged} setIsLogged={setIsLogged} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-rules" element={<UseRules />} />
          <Route path="/login" element={<LoginForm setIsLogged={setIsLogged} onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/traducir" element={<Translate isLogged={isLogged} username={username} />} />
          <Route path="/registro" element={<RegisterForm />} />
          <Route path="/codigo" element={<Code/>} />
          <Route path="/componentes" element={<TranslateLibrary/>} />
          <Route path="/traducciones-guardadas" element={<SavedTranslations username={username} />} />
          <Route path="/versiones" element={<Versions/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
