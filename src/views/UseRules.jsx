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
            <p>Es importante que te registres como usuario para poder hacer uso de la aplicación.</p>
            <p>Es necesario instalarse la dependencia Axios.</p>
            <p>Es necesario instalarse React para el uso de los componentes que se incluyan como ejemplos para el usuario.</p>

            <p>1. Instalación: Primero, necesitas instalar la dependencia en tu proyecto. Esto se puede hacer utilizando el comando `npm install`</p>
            <p>npm install neskatilla</p>

            <p>2. Inicialización: Antes de poder usar la clase `Neskatila`, necesitas inicializarla con tu clave API y servidor URL que se te propocionarán al registrate como usuario en nuestra Web.</p> 
            <p>Para ello necesitas importa `initNeskatila`.</p>
            <p>import {initNeskatilaComoTexto} from neskatila;</p>

            <p>Una vez hecho, invoca {initNeskatilaComoTexto} y pásale un objeto con la configuración de tu clave API y del servidor URL que se han proporcionado a tu usuario.</p>

            <p>{NeskatilaInitComoTexto}</p>
            <p>Si no proporcionas una URL de servidor, se usará 'http://localhost:3000' por defecto.</p>

            <p>3. Importación: Una vez instalada la dependencia, puedes importarla en tu archivo</p>
            <p>import { NeskatilaComoTexto} from 'neskatila;</p>

            <p>4. Traducción: Ahora puedes usar el método `translate` para traducir textos. Este método es una función asíncrona que realiza una solicitud GET al servidor especificado en serverURL, por lo que necesitarás usar `await` o `.then()` para manejar la respuesta. Esta solicitud incluye el texto a traducir y los idiomas de origen y destino como parámetros de consulta. Incluyendo también la apiKey propocioanada al usuario para autenticarse. Por ejemplo:</p>
    
            <p>let palabraTraducida = await Neskatila.translate('eu', 'es', 'kaixo');</p>
            <p>console.log(palabraTraducida);</p>
    
            <p>Este código traducirá la palabra 'kaixo' del euskera al castellano.</p>

            <p>5. Uso del Hook: También puedes usar el hook `useNeskatila` para acceder al método `translate`.  Por ejemplo:</p>
            <p>Este código hace lo mismo que el anterior, pero utilizando el hook `useNeskatila`.</p>
            <p>const { TranslateComoTexto } = useNeskatila();</p>
            <p>let palabraTraducida = await translate('eu', 'es', 'kaixo');</p>
            <p>console.log(palabraTraducida);</p>  
    
            <p>Esto puede ser útil si estás trabajando con un componente de React. En la pestaña "Componentes Dependencia" iremos incorporando diferentes ejemplos de componentes donde podrás utilizar neskatila y podrás descargarte junto con la dependencia.</p>
        </>
    )
}

export default UseRules;