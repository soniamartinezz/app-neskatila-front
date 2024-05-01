import React, { useState, useEffect } from 'react';

function ButtonFavorites({ onClick }) {
    const [buttonText, setButtonText] = useState('Guardar');

    const handleClick = async () => {
        setButtonText('¡Guardado!');
        await onClick();
        setTimeout(() => {
            setButtonText('Guardar');
        }, 5000);
    };

    return (
        <button 
            className="button-view"
            type="button"
            onClick={handleClick}
        >
            {buttonText}
        </button>
    );
}

export default ButtonFavorites;
