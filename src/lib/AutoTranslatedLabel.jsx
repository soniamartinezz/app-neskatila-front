import { useState, useEffect } from 'react';
import { useNeskatila } from "./useNeskatila";
import PropTypes from "prop-types";

// Este es un componente que utiliza el Custom Hook "useNeskatila" para traducir automaticamente su contenido.

export const AutoTranslatedLabel = (props) => {

    // value: el texto que se va a traducir.
    // sourceLanguage: el idioma original del texto.
    // targetLanguage: el idioma al que se traducira el texto.
    // css: una cadena opcional que se puede utilizar para aplicar estilos CSS al componente

    const { sourceLanguage, targetLanguage, css, value } = props;
    const { translate } = useNeskatila();
    const [labelValue, setLabelValue] = useState(value);

    // El componente se actualiza automaticamente cuando cambian los idiomas de origen o destino, gracias al Hook useEffect.
    // Cuando se monta el componente, se llama a la función "translate" para traducir el valor proporcionado en las propiedades del componente. 
    // El resultado se guarda en el estado del componente y se muestra en el renderizado del componente.

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

// PropTypes permite validar las props que se van pasar a los componentes, en este caso AutoTranslatedLabel, ya que esta destinado a ser reutilizados en otros codigos. De esta manera,
// verificamos si las propiedades cumplen con los valores que queresmos para este componente. Nos sirve como una deteccion temprana de errores al recibir propiedades con valores incorrectos.

AutoTranslatedLabel.propTypes = {
    value: PropTypes.string,
    sourceLanguage: PropTypes.string,
    targetLanguage: PropTypes.string,
    css: PropTypes.string
};
