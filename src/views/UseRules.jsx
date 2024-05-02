function UseRules() {
    const TranslateComoTexto =`{ translate }`
    const initNeskatilaComoTexto = `{ initNeskatila }`
    const NeskatilaComoTexto = `{ useNeskatila }`
    const NeskatilaInitComoTexto = `Neskatila.init({
        apiKey: 'tu_clave_api',
        serverURL: 'url_del_servidor'
    });`;

    return(
        <>
            <main className="container">
                <section className="content use-rules">
                    <h4><b>Pasos previos necesarios:</b></h4>
                    <ul>
                        <li>
                            <p>Es importante que los usuarios se registren para poder hacer uso de la aplicación.</p>
                        </li>
                        <li>
                            <p>Es necesario instalar la dependencia Axios.</p>
                            <code>npm install axios</code>
                        </li>
                    </ul>

                    <h4><b>Pasos previos opcionales:</b> </h4>
                    <ul>
                        <li>
                            <p>
                                Para poder hacer uso de los ejemplos de componentes en React que se incluyan en la dependencia, los usuarios deberán instalarse React.
                            </p>
                            <code>npm i react</code>
                        </li>
                    </ul>

                    <h4><b>Pasos a seguir:</b> </h4>
                    <ol>
                        <li>
                            <p>
                                <b>Instalación:</b> Los usuarios necesitan instalar la dependencia en su proyecto.
                            </p>
                            <code>npm install neskatilla</code>
                        </li>
                        <li>
                            <p>
                                <b>Inicialización:</b> Para poder utilizar Neskatila, es necesario que los usuarios la inicialicen utilizando la clave API y la serverURL que se les proporciona al estar registrados en nuestra aplicación web.
                            </p>
                            <p>Para ello, deberán importarse <code>{ initNeskatilaComoTexto }</code> a su fichero:</p>
                            <code>import { initNeskatilaComoTexto } from 'neskatila';</code>
                            <p>Una vez hecho, deben invocar <code>{ initNeskatilaComoTexto }</code> y pasar un objeto con la configuración de su clave API y serverURL proporcionadas.</p>
                            <code>{ NeskatilaInitComoTexto }</code>
                            <p>Si no se proporciona una serverURL, se usará 'http://localhost:3000' por defecto.</p>
                        </li>
                        <li>
                            <p>
                                <b>Importación:</b> Los usuarios pueden importarla en su archivo.
                            </p>
                            <code>import { NeskatilaComoTexto } from 'neskatila';</code>
                        </li>
                        <li>
                            <p>
                                <b>Traducción:</b> Ahora los usuarios pueden usar el método <code>translate</code> para traducir textos. Este método es una función asíncrona que realiza una solicitud GET al servidor especificado en la URL del servidor, por lo que necesitarán usar <code>await</code> o <code>.then()</code> para manejar la respuesta. Esta solicitud incluye como parámetros de consulta los idiomas de origen y destino y el texto a traducir.
                            </p>
                            <p>
                                Por ejemplo:
                            </p>
                            <code>let palabraTraducida = await Neskatila.translate('eu', 'es', 'kaixo');</code>
                            <br />
                            <br />
                            <code>console.log(palabraTraducida);</code>
                            <p>
                                Este código traducirá la palabra 'kaixo' del euskera al castellano.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Uso del Hook:</b> También pueden usar el hook  
                                <code>useNeskatila</code>
                                para acceder al método 
                                <code>{ TranslateComoTexto }</code>. 
                                <p>Por ejemplo: Este código hace lo mismo que el anterior, pero utilizando el hook 'useNeskatila'.</p>
                                
                            </p>
                            <p>
                                <code>const { TranslateComoTexto } = useNeskatila();</code>
                                <br />
                                <code>let palabraTraducida = await translate('eu', 'es', 'kaixo');</code>
                                <br />
                                <code>console.log(palabraTraducida);</code>
                                <br />
                                <br />
                                Esto puede ser útil si están trabajando con un componente de React. En la pestaña "Uso en React" iremos incorporando diferentes ejemplos de componentes donde se utiliza Neskatila. También serán descargados junto con la dependencia y el usuario podrá hacer uso de ellos.
                            </p>
                        </li>
                    </ol>  
                </section>
            </main>
        </>
    )
}

export default UseRules;