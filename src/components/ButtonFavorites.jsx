function ButtonFavorites() {
    return(
        <>
            <button 
                className={`button-save-favorites`}
                type="button"
                value="-"
            >
                <button 
                    className={`button-view-favorites`}
                    type="button"
                    value="Guardar"
                >
                    Guardar
                </button>
                -
            </button>
        </>
    )
}

export default ButtonFavorites;