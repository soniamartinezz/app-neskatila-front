import { useState } from "react";

function Toggle({ onToggle }) {
    const [textButton, setTextButton] = useState('Español ➔ Euskera');

    const handleChange = (event) => {
        const newValue = event.target.value === 'Español ➔ Euskera' ? 'Euskera ➔ Español' : 'Español ➔ Euskera';
        setTextButton(newValue);
        onToggle(newValue, textButton);
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

export default Toggle;