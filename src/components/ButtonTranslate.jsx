import { useState } from "react";

function ButtonTranslate({ language }) {
    const [textButton, setTextButton] = useState('Español ➔ Euskera');

    const handleChange = (event) => {
        const newValue = event.target.value === 'Español ➔ Euskera' ? 'Euskera ➔ Español' : 'Español ➔ Euskera';
        setTextButton(newValue);
        language(newValue, textButton);
    }

    return(
        <>
            <button 
                className={`button-language ${textButton === 'Español ➔ Euskera' ? "euskera" : "spanish"}`}
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