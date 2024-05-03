import axios from 'axios';


//En el contexto de la programacion orientada a objetos, la palabra clave class se utiliza para definir una plantilla para la creacion de objetos. 
//Esta plantilla incluye atributos y funciones que describen las caracteristicas y comportamientos del objeto
//En este caso especifico, estamos definiendo una clase llamada Neskatila. Esta clase tiene dos propiedades: apiKey y serverURL. 
//Estas propiedades son esenciales para el funcionamiento de la dependencia Neskatila.


export class Neskatila {
    apiKey = ""
    serverURL = ""


// "static" para definir metodos estaticos, en este caso "init" y "translate". Estos metodos se pueden invocar directamente desde la clase Neskatila, sin necesidad de crear una instancia de la clase.
// Esto significa que no necesitamos usar "new" en una instancia para crear un objeto Neskatila antes de usar estos metodos.
// El metodo "init" se utiliza para establecer la configuración de "Neskatila", incluyendo la serverURL que determina a que servidor backend se conectara. Si no se proporciona una serverURL, se usara ‘http://localhost:3000’ por defecto.
// "apiKey" es un codigo de seguridad que permite que solo los usuarios registrados puedan usar la dependencia "Neskatila".

    static init(config) {
        this.apiKey = config.apiKey;
        this.serverURL = config.serverURL || "http://localhost:3000";
    }


//Llamada mediante axios al backend, local o subido a Internet, dependiendo de como se defina en serverURL del metodo "init".


    static translate = async (srcLanguage, dstLanguage, word) => {
        try {
            const response = await axios.get(`${this.serverURL}/?word=${word}&source=${srcLanguage}&target=${dstLanguage}`, {
                headers: {
                    apiKey: this.apiKey
                }
            });
            return response.data.translated_text;
        } catch (error) {
            console.error(error);
        }
    };

}


// Definimos la funcion initNeskatila que acepta un objeto con las propiedades apiKey y serverURL, las cuales se definen en el metodo init. Esta función se invocara en el archivo App.jsx del front-end. 
// Al invocar initNeskatila, establecemos nuestra apiKey para poder utilizar useNeskatila, y especificamos el servidor backend al que nos conectaremos, que puede ser local o estar alojado en Internet. 
// Si no se proporciona una serverURL, se usara ‘http://localhost:3000’ por defecto.


export function initNeskatila(config) {
    Neskatila.init(config)
}