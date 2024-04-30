import { useState, useEffect } from 'react';
import ButtonTranslate from "../components/ButtonTranslate";
import Footer from "../components/Footer";
import { AutoTranslateTextArea } from "../lib/index.js";
import { AutoTranslatedLabel } from "../lib/index.js";
import { useNeskatila } from "../lib/index.js";

function TranslateLibrary() {
    const [lenguaje, setLanguage] = useState('Español ➔ Euskera');
    const { translate } = useNeskatila();

    const getLanguagesFromText = (langText) => {
        const sourceLanguage = langText === 'Español ➔ Euskera' ? 'es' : 'eu';
        const targetLanguage = langText === 'Español ➔ Euskera' ? 'eu' : 'es';
        return { sourceLanguage, targetLanguage };
    }
    const { sourceLanguage, targetLanguage } = getLanguagesFromText(lenguaje);
    const [resultado, setResultado] = useState(sourceLanguage == "es" ? "KAIXO" : "HOLA");

    useEffect(() => {
        (async () => {
            try {
                const texto = await translate(sourceLanguage, targetLanguage, resultado);
                setResultado(texto);
            } catch (err) {
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
                <section className="content">
                    <ButtonTranslate OnButton={handleChangeLanguage} />

                    <h1>AutoTranslatedLabel</h1>
                    <h3>Este label se traduce solo automaticamente</h3>
                    <AutoTranslatedLabel value={"Demostración visual de como gracias a Neskatila puedes transformar instantáneamente los textos de tu sitio Web o aplicación al euskera, o al español, con solo un clic en un botón de alternancia (toggle). Solo necesitas especificar el idioma de origen de tu Web o app y Neskatila se encargará del resto. Esta demostración te mostrará cómo Neskatila evitará la necesidad de introducir los textos en un segundo idioma en tu programación"} sourceLanguage={sourceLanguage} targetLanguage={targetLanguage} />
                    <h1>AutoTranslateTextArea</h1>
                    <h3>El valor del textarea se traduce solo al quitar el foco (onblur)</h3>
                    <div className="translate">
                        <AutoTranslateTextArea sourceLanguage={sourceLanguage} targetLanguage={targetLanguage} />
                    </div>
                </section>
            </main >
            <Footer />
        </>
    )
}

export default TranslateLibrary;