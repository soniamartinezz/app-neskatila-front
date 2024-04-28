import React from 'react';

function ButtonFavorites({ onClick }) {
    return(
        <>
            <button 
                className="button-save"
                type="button"
                value="Guardar"
                onClick={onClick}
            >
                Guardar
            </button>
        </>
    )
}

export default ButtonFavorites;
