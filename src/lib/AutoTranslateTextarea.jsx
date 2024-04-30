import { useState } from 'react';
import { useNeskatila } from "./useNeskatila";
import PropTypes from "prop-types";


export const AutoTranslateTextArea = (props) => {
    const { sourceLanguage, targetLanguage } = props;
    const { translate } = useNeskatila();
    const [textAreaValue, setTextAreaValue] = useState('');

    const handleTranslate = async (event) => {
        try {
            const texto = await translate(sourceLanguage, targetLanguage, event.target.value);
            setTextAreaValue(texto);
            console.log(texto);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = async (event) => {
        setTextAreaValue(event.target.value);
    };

    return (
        <textarea value={textAreaValue} onChange={handleChange} onBlur={handleTranslate} placeholder="Escribe los textos de tu Web"></textarea>
    )
}

AutoTranslateTextArea.propTypes = {
    sourceLanguage: PropTypes.string,
    targetLanguage: PropTypes.string,
};
