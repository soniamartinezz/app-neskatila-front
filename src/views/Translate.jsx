// Translate.jsx
import React, { useState, useRef } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ButtonTranslate from "../components/ButtonTranslate";
import ButtonFavorites from "../components/ButtonFavorites";
import ButtonView from "../components/ButtonView";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner.jsx";
import { useNeskatila } from "../lib/index.js";

function Translate({ isLoggedIn, username }) {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [language, setLanguage] = useState('Castellano ➔ Euskera');
    const [placeholderText, setPlaceholderText] = useState('Por favor, introduce el texto de tu página web o aplicación en el siguiente campo...');
    const [isLoading, setIsLoading] = useState(false);
    const textAreaRef = useRef(null);
    const { translate } = useNeskatila();
    const navigate = useNavigate(); 

    const handleChangeLanguage = (newLanguage, textButtonValue) => {
        setLanguage(newLanguage);
        setPlaceholderText(textButtonValue === 'Castellano ➔ Euskera' ? 'Mesedez, sartu zure web orriko edo aplikazioko testua hurrengo eremuan...' : 'Por favor, introduce el texto de tu página web o aplicación en el siguiente campo...');
        if (textAreaValue) {
            handleTranslate(textButtonValue);
        }
    };

    const getLanguagesFromText = (langText) => {
        const sourceLanguage = langText === 'Castellano ➔ Euskera' ? 'es' : 'eu';
        const targetLanguage = langText === 'Castellano ➔ Euskera' ? 'eu' : 'es';
        return { sourceLanguage, targetLanguage };
    }

    const handleTranslate = async () => {
        const { sourceLanguage, targetLanguage } = getLanguagesFromText(language);

        try {
            setIsLoading(true);
            const texto = await translate(sourceLanguage, targetLanguage, textAreaRef.current.value);
            setTextAreaValue(texto);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
        }
    };

    const handleSaveTranslation = async () => {
        if (textAreaValue.trim() === '') {
            return;
        }

        try {
            const sourceLanguage = language === 'Castellano ➔ Euskera' ? 'es' : 'eu';
            const translationData = {
                userName: username,
                texto: textAreaValue,
                sourceLanguage: sourceLanguage 
            };            
            await axios.post('http://localhost:3000/traducir', translationData);
        } catch (error) {
            console.error('Error al guardar la traducción:', error);
        }
    };
    
    return (
        <>
            <main className="container">
                <section className="content">
                    <h1>Neskatila</h1>
                    <p>En esta demostración visual de Neskatila se exhibe la eficacia de esta herramienta en la transformación instantánea de los textos en tu sitio web o aplicación al euskera o al castellano. Esta transformación se realiza con un simple clic en un botón o toggle. Todo lo que se requiere por parte del usuario es especificar el idioma de origen de su sitio web o aplicación. Una vez hecho esto, Neskatila se encarga del resto, simplificando así el proceso de traducción.</p>
                    <p>Esta demostración permite apreciar cómo Neskatila elimina la necesidad de introducir manualmente los textos en un segundo idioma en la programación. De esta manera, Neskatila ayuda a ahorrar tiempo y esfuerzo, permitiendo a los usuarios centrarse en otros aspectos importantes de sus proyectos.</p>

                    <p>Además, al registrarse como usuario, se ofrece la posibilidad de guardar las traducciones realizadas. Esto brinda una experiencia más personalizada y permite un acceso rápido a las traducciones realizadas previamente.</p>

                    <div className="translate">
                        <ButtonTranslate OnButton={handleChangeLanguage} />
                        {isLoggedIn && <ButtonFavorites onClick={handleSaveTranslation} />}
                        {isLoggedIn && <ButtonView username={username} />}
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <textarea ref={textAreaRef} value={textAreaValue} onChange={(event) => setTextAreaValue(event.target.value)} placeholder={placeholderText}></textarea>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Translate;
