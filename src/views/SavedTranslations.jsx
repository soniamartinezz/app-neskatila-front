import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SavedTranslations({ username }) {
    const [translations, setTranslations] = useState([]);

    // Se buscan las traducciones almacenadas de un usuario con sesión iniciada y se mantiene almacenadas en 'translations'
    useEffect(() => {
        const fetchTranslations = async () => {
            try {
                const response = await axios.get(`https://app-neskatila-back-production.up.railway.app/traducciones-guardadas/${username}`);
                setTranslations(response.data);
            } catch (error) {
                console.error('Error al obtener las traducciones guardadas:', error);
            }
        };

        fetchTranslations();
    }, [username]);

    // Elimina todas las traducciones guardadas de un usuario 
    const handleDeleteTranslations = async () => {
        try {
            await axios.delete(`https://app-neskatila-back-production.up.railway.app/traducciones-guardadas/${username}`);
            setTranslations([]);
        } catch (error) {
            console.error('Error al eliminar las traducciones guardadas:', error);
        }
    };

    return (
        <>
            <main className='container'>
                <section className='content'>
                    <h2>Traducciones guardadas</h2>
                    <button className="button-delete" onClick={handleDeleteTranslations}>Eliminar todas las traducciones</button>
                    <ul className='list-save'>
                        {translations.map((translation, index) => (
                            <li key={index}>
                                {translation.texto} {translation.language}
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
}

export default SavedTranslations;
