import { useState, useRef } from "react";
import axios from 'axios';
import Toggle from "../components/Toggle";
import Footer from "../components/Footer";

function Translate() {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [language, setLanguage] = useState('Español ➔ Euskera');
    const [placeholderText, setPlaceholderText] = useState('Escribe los textos de tu Web');
    const textAreaRef = useRef(null);

    const handleToggle = (newLanguage, textButtonValue) => {
        setLanguage(newLanguage);
        setPlaceholderText(textButtonValue === 'Español ➔ Euskera' ? 'Idatzi zure Webgunearen testuak' : 'Escribe los textos de tu Web');
        handleTranslate(textButtonValue);
    };

    const handleTextAreaChange = (event) => {
        setTextAreaValue(event.target.value);
    };

    const handleTranslate = async () => {
        const sourceLanguage = language === 'Español ➔ Euskera' ? 'es' : 'eu';
        const targetLanguage = language === 'Español ➔ Euskera' ? 'eu' : 'es';

        try {
            const response = await axios.get(`http://localhost:3000/?word=${textAreaRef.current.value}&source=${sourceLanguage}&target=${targetLanguage}`);
            setTextAreaValue(response.data.translated_text);
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <>
            <main className="container">
                <section className="content">
                    <h1>neskatila</h1>
                    <p>Demostración visual de como gracias a Neskatila puedes transformar instantáneamente los textos de tu sitio Web o aplicación al euskera, o al español, con solo un clic en un botón de alternancia (toggle). Solo necesitas especificar el idioma de origen de tu Web o app y Neskatila se encargará del resto. Esta demostración te mostrará cómo Neskatila evitará la necesidad de introducir los textos en un segundo idioma en tu programación”</p>
                    <div className="translate">
                        <Toggle onToggle={handleToggle} />
                        <textarea ref={textAreaRef} value={textAreaValue} onChange={handleTextAreaChange} placeholder={placeholderText}></textarea>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Translate;