import { useState } from 'react';
import { useNeskatila } from "./useNeskatila";
import PropTypes from "prop-types";

// Este un componente utiliza el Hook useNeskatila para traducir automaticamente el contenido que haya en un input.

export const AutoTranslateTextArea = (props) => {
    const { sourceLanguage, targetLanguage } = props;
    const { translate } = useNeskatila();
    const [textAreaValue, setTextAreaValue] = useState('');

    // "translate" proporcionado por el Hook useNeskatila para traducir el texto del idioma de origen al idioma de destino.

    const handleTranslate = async (event) => {
        try {
            const texto = await translate(sourceLanguage, targetLanguage, event.target.value);
            setTextAreaValue(texto);
            console.log(texto);
        } catch (error) {
            console.error(error);
        }
    };

    // El valor del input se actualiza con "handleChange". Este actualiza el estado "textAreaValue" del texto introducido.

    const handleChange = async (event) => {

        // El resultado de la traduccion se guarda en el estado textAreaValue, que se muestra en el Input.

        setTextAreaValue(event.target.value);
    };

    return (
        <textarea value={textAreaValue} onChange={handleChange} onBlur={handleTranslate} placeholder="Por favor, introduce el texto de tu página web o aplicación en el siguiente campo..."></textarea>
    )
}

AutoTranslateTextArea.propTypes = {
    sourceLanguage: PropTypes.string,
    targetLanguage: PropTypes.string,
};
