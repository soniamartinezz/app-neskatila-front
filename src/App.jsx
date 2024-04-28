import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Translate from './views/Translate';
import UseRules from './views/UseRules';
import LoginForm from './views/Login';
import RegisterForm from './views/Register';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Definir el estado isLoggedIn

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      // Si isLoggedIn está en localStorage, actualiza el estado de autenticación
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div id="root" className={`root ${darkMode ? 'dark' : 'light'}`}>
      <Router>
        <Navbar handleClick={handleClick} darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/normas-uso" element={<UseRules />} />
          <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} /> {/* Pasar setIsLoggedIn como prop */}
          <Route path="/traducir" element={<Translate isLoggedIn={isLoggedIn} />} /> {/* Pasar isLoggedIn como prop */}
          <Route path="/registro" element={<RegisterForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
