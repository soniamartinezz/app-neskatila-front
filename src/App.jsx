import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Translate from './views/Translate';
import UseRules from './views/UseRules';
import LoginForm from './views/Login';
import RegisterForm from './views/Register';
import './App.css';
import SavedTranslations from './views/SavedTranslations';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
    localStorage.setItem('username', username);
  };

  return (
    <div id="root" className={`root ${darkMode ? 'dark' : 'light'}`}>
      <Router>
        <Navbar handleClick={handleClick} darkMode={darkMode} setDarkMode={setDarkMode} username={username} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/normas-uso" element={<UseRules />} />
          <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/traducir" element={<Translate isLoggedIn={isLoggedIn} />} />
          <Route path="/registro" element={<RegisterForm />} />
          <Route path="/traducciones-guardadas" element={<SavedTranslations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
