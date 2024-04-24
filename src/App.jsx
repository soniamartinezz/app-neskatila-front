import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ToggleSwitch from './components/ToggleSwitch';
import Home from './views/Home';
import Translate from './views/Translate';
import UseRules from './views/UseRules';
import './App.css';

function App({ handleClick, isDark }) {
  console.log("isDark:", isDark);
  return (
    <>
      <Router>
        <Navbar />
        <ToggleSwitch handleClick={handleClick} isDark={isDark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/traducir" element={<Translate />} />
          <Route path="/normas-uso" element={<UseRules />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;