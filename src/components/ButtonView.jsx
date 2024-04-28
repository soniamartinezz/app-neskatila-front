import { Link } from 'react-router-dom';

function ButtonView() {
    return (
        <>
            <Link to="/traducciones-guardadas">
                <button
                    className="button-view"
                    type="button"
                    value="Ver"
                >
                    Traducciones guardadas
                </button>
            </Link>
        </>
    );
}

export default ButtonView; 