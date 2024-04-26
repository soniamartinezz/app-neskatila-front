import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginButton from './LoginButton';

function Navbar() {
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    return (
        <>
            <div className="header"></div>
            <LoginButton />
            <nav className='navbar'>
                <ul>
                    <li className={`${activePath === '/' ? "active" : ""}`}>
                        <Link to="/">Introducción</Link>
                    </li>
                    <li className={`${activePath.includes('/traducir') ? "active" : ""}`}>
                        <Link to="/traducir">Prueba el traductor</Link>
                    </li>
                    <li className={`${activePath.includes('/normas-uso') ? "active" : ""}`}>
                        <Link to="/normas-uso">Normas de uso</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
