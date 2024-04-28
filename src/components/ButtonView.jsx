import { Link } from 'react-router-dom';

function ButtonView({ username }) {
    return (
        <>
            <Link to="/traducciones-guardadas">
                <button className="button-view" type="button">
                    Traducciones guardadas
                </button>
            </Link>
        </>
    );
};

export default ButtonView;
