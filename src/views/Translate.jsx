import React, { useState, useEffect } from "react";
import axios from 'axios';
import ButtonTranslate from "../components/ButtonTranslate";
import ButtonFavorites from "../components/ButtonFavorites";
import ButtonView from "../components/ButtonView";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import ModalSave from "../components/ModalSave";

function Translate({ isLoggedIn, username }) {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [language, setLanguage] = useState('Español ➔ Euskera');
    const [placeholderText, setPlaceholderText] = useState('Escribe los textos de tu Web');
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const textAreaRef = React.useRef(null);

    const handleChangeLanguage = (newLanguage, textButtonValue) => {
        setLanguage(newLanguage);
        setPlaceholderText(textButtonValue === 'Español ➔ Euskera' ? 'Idatzi zure Webgunearen testuak' : 'Escribe los textos de tu Web');
        if (textAreaValue) {
            handleTranslate(textButtonValue);
        }
    };

    const handleTextAreaChange = (event) => {
        setTextAreaValue(event.target.value);
    };

    const handleTranslate = async () => {
        const sourceLanguage = language === 'Español ➔ Euskera' ? 'es' : 'eu';
        const targetLanguage = language === 'Español ➔ Euskera' ? 'eu' : 'es';

        setIsLoading(true);

        try {
            const response = await axios.get(`http://localhost:3000/?word=${textAreaRef.current.value}&source=${sourceLanguage}&target=${targetLanguage}`);
            setTextAreaValue(response.data.translated_text);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
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
                    <p>Demostración visual de como gracias a Neskatila puedes transformar instantáneamente los textos de tu sitio Web o aplicación al euskera, o al español, con solo un clic en un botón de alternancia (toggle). Solo necesitas especificar el idioma de origen de tu Web o app y Neskatila se encargará del resto. Esta demostración te mostrará cómo Neskatila evitará la necesidad de introducir los textos en un segundo idioma en tu programación”</p>
                    <div className="translate">
                        <ButtonTranslate language={handleChangeLanguage} />
                        {isLoggedIn && <ButtonFavorites onClick={handleSaveTranslation} />}
                        {isLoggedIn && <ButtonView username={username} />}
                        {isLoading ? (
                            <Spinner />
                        ) : (
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
