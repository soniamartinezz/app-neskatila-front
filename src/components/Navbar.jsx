import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <>
            <nav className='navbar'>
                <ul>
                    <li>
                        <Link to={"/"}>Introducción</Link>
                    </li>
                    <li>
                        <Link to={"/traducir"}>Prueba el traductor</Link>
                    </li>
                    <li>
                        <Link to={"/normas-uso"}>Normas de uso</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;