import { useState, useEffect } from 'react';
import ButtonTranslate from "../components/ButtonTranslate";
import Spinner from "../components/Spinner.jsx";
import Footer from "../components/Footer";
import { AutoTranslateTextArea } from "../lib/index.js";
import { AutoTranslatedLabel } from "../lib/index.js";
import { useNeskatila } from "../lib/index.js";

function TranslateLibrary() {
    const [lenguaje, setLanguage] = useState('Castellano ➔ Euskera');
    const [isLoading, setIsLoading] = useState(false);
    const { translate } = useNeskatila();
    const AutoTranslatedLabelComoTexto= `{ AutoTranslatedLabel }`
    const AutoTranslateTextAreaComoTexto= `{ AutoTranslateTextArea }`

    const getLanguagesFromText = (langText) => {
        const sourceLanguage = langText === 'Castellano ➔ Euskera' ? 'es' : 'eu';
        const targetLanguage = langText === 'Castellano ➔ Euskera' ? 'eu' : 'es';
        return { sourceLanguage, targetLanguage };
    }
    const { sourceLanguage, targetLanguage } = getLanguagesFromText(lenguaje);
    const [resultado, setResultado] = useState(sourceLanguage == "es" ? "KAIXO" : "HOLA");

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const texto = await translate(sourceLanguage, targetLanguage, resultado);
                setResultado(texto);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                console.error(err);
            }
        })();
    }, [sourceLanguage, targetLanguage]);

    const handleChangeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    }


    return (
        <>
            <main className="container">
                <section className="content use-react">
                    <p>Se presentan ejemplos de diversos componentes elaborados en React utilizando Neskatila. Estos componentes están disponibles al descargar la dependencia Neskatila.</p>
                    <p>En la pestaña "Código", los usuarios pueden consultar los códigos de los componentes mostrados, junto con notas aclaratorias sobre su funcionamiento."</p>
                    
                    <h2 className='subtitle'>AutoTranslatedLabel</h2>
                    <ButtonTranslate OnButton={handleChangeLanguage} />
                    <p>Para poder utilizarlo, se importa el archivo al fichero de la siguiente manera:</p>
                    <code>import {AutoTranslatedLabelComoTexto} from "neskatila"</code>
                    <p>Luego de importarlo, se completa el componente:</p>
                    <code>AutoTranslatedLabel value="" sourceLanguage="" targetLanguage="" css=""</code>
                    <h4>Aquí se presenta una demostración de cómo un texto de ejemplo se traduce automáticamente al hacer clic en el botón.</h4>
                    {isLoading ? (
                            <Spinner />
                        ) : (
                            <AutoTranslatedLabel value={"Se presenta una demostración visual que ilustra cómo, gracias a Neskatila, es posible transformar instantáneamente los textos de un sitio web o aplicación al euskera o al castellano con un solo clic en un botón de alternancia (toggle). Solo se requiere especificar el idioma de origen de la web o aplicación, y Neskatila se encargará del resto. Esta demostración demuestra cómo Neskatila elimina la necesidad de introducir manualmente los textos en un segundo idioma en la programación."} sourceLanguage={sourceLanguage} targetLanguage={targetLanguage} />
                    )}
                    
                    <h2 className='subtitle'>AutoTranslateTextArea</h2>
                    <p>Para poder utilizarlo, se importa al archivo de la siguiente manera:</p>
                    <code>import {AutoTranslateTextAreaComoTexto} from "neskatila"</code>
                    <p>Luego, el usuario escribe texto en el campo de entrada. Cuando finaliza la interacción con él, es decir, cuando pierde el foco (evento onBlur), el texto se traducirá automáticamente.</p>
                    <div className="translate">
                        {isLoading ? (
                                <Spinner />
                            ) : (
                                <AutoTranslateTextArea sourceLanguage={sourceLanguage} targetLanguage={targetLanguage} />
                        )}
                    </div>
                </section>
            </main >
            <Footer />
        </>
    )
}

export default TranslateLibrary;