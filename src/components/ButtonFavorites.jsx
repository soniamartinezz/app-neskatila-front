import React, { useState, useEffect } from 'react';

function ButtonFavorites({ onClick }) {
    const [buttonText, setButtonText] = useState('Guardar');

    const handleChangeMode = async () => {
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
            onClick={handleChangeMode}
        >
            {buttonText}
        </button>
    );
}

export default ButtonFavorites;
