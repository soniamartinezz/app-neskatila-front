import { useState } from "react";

function Toggle() {

    const [ textButton, setTextButton ] = useState('Español ➔ Euskera');

    const handleChange = (event) => {
        setTextButton(event.target.value === 'Español ➔ Euskera' ? 'Euskera ➔ Español' : 'Español ➔ Euskera' )
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