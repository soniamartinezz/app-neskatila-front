import { useState } from "react";

function ButtonTranslate({ OnButton }) {
    const [textButton, setTextButton] = useState('Castellano ➔ Euskera');

    const handleChange = (event) => {
        const newValue = event.target.value === 'Castellano ➔ Euskera' ? 'Euskera ➔ Castellano' : 'Castellano ➔ Euskera';
        setTextButton(newValue);
        OnButton(newValue, textButton);
    }

    return(
        <>
            <button 
                className="button-language"
                type="button"
                value={textButton}
                onClick={handleChange}
            >
                {textButton}
            </button>
        </>
    )
}

export default ButtonTranslate;