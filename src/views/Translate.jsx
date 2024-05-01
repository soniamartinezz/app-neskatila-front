import React, { useState, useRef } from "react";
import axios from 'axios';
import ButtonTranslate from "../components/ButtonTranslate";
import ButtonFavorites from "../components/ButtonFavorites";
import ButtonView from "../components/ButtonView";
import Footer from "../components/Footer";
import ModalSave from "../components/ModalSave";
import { useNeskatila } from "../lib/index.js";

function Translate({ isLoggedIn, username }) {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [language, setLanguage] = useState('Español ➔ Euskera');
    const [placeholderText, setPlaceholderText] = useState('Escribe los textos de tu Web');
    const [showModal, setShowModal] = useState(false);
    const textAreaRef = useRef(null);
    const { translate } = useNeskatila();

    const handleChangeLanguage = (newLanguage, textButtonValue) => {
        setLanguage(newLanguage);
        setPlaceholderText(textButtonValue === 'Español ➔ Euskera' ? 'Idatzi zure Webgunearen testuak' : 'Escribe los textos de tu Web');
        if (textAreaValue) {
            handleTranslate(textButtonValue);
        }
    };

    const getLanguagesFromText = (langText) => {
        const sourceLanguage = langText === 'Español ➔ Euskera' ? 'es' : 'eu';
        const targetLanguage = langText === 'Español ➔ Euskera' ? 'eu' : 'es';
        return { sourceLanguage, targetLanguage };
    }

    const handleTranslate = async () => {
        const { sourceLanguage, targetLanguage } = getLanguagesFromText(language);

        try {
            const texto = await translate(sourceLanguage, targetLanguage, textAreaRef.current.value);
            // const response = await axios.get(`http://localhost:3000/?word=${textAreaRef.current.value}&source=${sourceLanguage}&target=${targetLanguage}`);
            setTextAreaValue(texto);
            console.log(texto);
        } catch (error) {
            console.error(error);
        }
    };

    const handleTextAreaChange = (event) => {
        setTextAreaValue(event.target.value);
    };
    const handleSaveTranslation = async () => {
        try {
            const sourceLanguage = language === 'Español ➔ Euskera' ? 'es' : 'eu';
            const translationData = {
                userName: username,
                texto: textAreaValue,
                sourceLanguage: sourceLanguage 
            };
            console.log('Datos de traducción a enviar al backend:', translationData);
            
            await axios.post('http://localhost:3000/traducir', translationData);
            console.log('Traducción guardada correctamente.');
            setShowModal(true); // Mostrar la modal cuando la traducción se guarda correctamente
        } catch (error) {
            console.error('Error al guardar la traducción:', error);
        }
    };
    

    return (
        <>
            <main className="container">
                <section className="content">
                    <h1>neskatila</h1>
                    <p>Demostración visual que muestra la eficacia de Neskatila en la transformación instantánea de los textos de tu sitio web o aplicación al euskera, o al español. Esta transformación se logrará con un simple clic en un botón o toggle.
                        Lo único que se requiere de tu parte es especificar el idioma de origen de tu sitio web o aplicación. Una vez hecho esto, Neskatila se encargará del resto, facilitando así el proceso de traducción.
                        Esta demostración te permitirá apreciar cómo Neskatila elimina la necesidad de introducir manualmente los textos en un segundo idioma en tu programación. De esta manera, Neskatila te ayuda a ahorrar tiempo y esfuerzo, permitiéndote centrarte en otros aspectos importantes de tu proyecto</p>
                    <p>Introduce en el siguiente Input un texto como si de la propia de Web o aplicación se tratase.</p>

                    <p>Si te registras como usuario podrás guardar tus traducciones.</p>

                    <div className="translate">
                        <ButtonTranslate OnButton={handleChangeLanguage} />
                        {isLoggedIn && <ButtonFavorites onClick={handleSaveTranslation} />}
                        {isLoggedIn && <ButtonView username={username} />}
                        {(
                            <>
                                <textarea ref={textAreaRef} value={textAreaValue} onChange={handleTextAreaChange} placeholder={placeholderText}></textarea>
                            </>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
            <ModalSave visible={showModal} onClose={() => setShowModal(false)} />
        </>
    );
}

export default Translate;