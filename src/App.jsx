import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home'
import Translate from './views/Translate';
import UseRules from './views/UseRules';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/traducir" element={<Translate />}></Route>
            <Route path="/normas-uso" element={<UseRules />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
