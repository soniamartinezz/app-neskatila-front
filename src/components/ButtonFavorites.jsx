function ButtonFavorites() {
    console.log('ButtonFavorites renderizado'); // Agrega este mensaje de depuración

    return(
        <>
            <button 
                className={`button-save-favorites`}
                type="button"
                value="Guardar"
            >
                Guardar
            </button>
        </>
    )
}

export default ButtonFavorites;