import { useState, useEffect } from 'react';
import { useNeskatila } from "./useNeskatila";
import PropTypes from "prop-types";


export const AutoTranslatedLabel = (props) => {
    const { sourceLanguage, targetLanguage, css, value } = props;
    const { translate } = useNeskatila();
    const [labelValue, setLabelValue] = useState(value);

    useEffect(() => {
        (async () => {
            try {
                const texto = await translate(targetLanguage, sourceLanguage, value);
                setLabelValue(texto);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [sourceLanguage, targetLanguage]);

    return (
        <span className={css ? css : ''}>{labelValue}</span>
    )
}

// PropTupes permite validar las props que se van pasar a los componentes, en este caso AutoTranslatedLabel, ya que esta destinado a ser reutilizados en otros códigos. De esta manera,
// verificamos si las propiedades cumplen con los valores que queresmos para este componente. Nos sirve como una detección temprana de errores al recibir propiedades con valores incorrectos.

AutoTranslatedLabel.propTypes = {
    value: PropTypes.string,
    sourceLanguage: PropTypes.string,
    targetLanguage: PropTypes.string,
    css: PropTypes.string
};
