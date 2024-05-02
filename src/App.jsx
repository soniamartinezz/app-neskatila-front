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

initNeskatila({ apiKey: API_KEY })

function App() {
  const [darkMode, setDarkMode] = useState(true); // Controla el modo oscuro de la app
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Comprobar si se ha iniciado sesión
  const [username, setUsername] = useState(""); // Guardar el username del usuario

  // Función para cambiar el modo oscuro / modo claro
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Comprobar si se ha guardado un 'username' en localStorage
    const storedUsername = localStorage.getItem('username');

    // Si hay un username guardado, cambiar el estado de 'username' y de 'isLoggedIn'
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  // Función para controlar el inicio de sesión
  const handleLoginSuccess = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
    localStorage.setItem('username', username);
    localStorage.setItem('isLoggedIn', true);
  };

  return (
    <div id="root" className={`root ${darkMode ? 'dark' : 'light'}`}>
      <Router>
        <Navbar handleClick={handleClick} darkMode={darkMode} setDarkMode={setDarkMode} username={username} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-rules" element={<UseRules />} />
          <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/traducir" element={<Translate isLoggedIn={isLoggedIn} username={username} />} />
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
