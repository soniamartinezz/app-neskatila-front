import axios from 'axios';

//Orientacion a objetos. "class" se utiliza para definir objetos, es como un molde para crear objetos basandose en los atributos y funciones que tiene dentro.
//En este caso crearimos un objeto llamado "Neskatila" con dos propiedades, apikey e serverURL. Seran necesarios para el uso de la dependencia.


export class Neskatila {
    apiKey = ""
    serverURL = ""


// "Static", metodo estatico, lo ponemos para poder usar (o invocar) la funcion (o metodo) "init" y "translate" sin necesidad de tener que crear una instancia. 
// (sin crear un objeto definido en Class Neskatila). Es decir, sin tener que crear un instancia con un "new" (como hacemos con mongoose para definir el objeto que va a la base de datos)
// Hacemos esto para que en el front, en App.jsx, gracias a "init" definamos un objeto en el que incluimos "serverURL" y podamos definir contra que backend va. Si no se informa por defecto sera local (por defecto puerto 3000) o uno ya subido a Internet.
// Apikey es nuestro codigo de seguridad para que solo usuarios registrados puedan usar la dependencia.

    static init(config) {
        this.apiKey = config.apiKey;
        this.serverURL = config.serverURL || "http://localhost:3000";
    }

//Llamada mediante axios al backen, local o de internet dependiendo de como se defina "init" en serverURL.

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

// Creamos la funcion "initNekatila" la cual recibe un objeto formado por las propiedades definidas en la funcion (o metodo) init, que son apiKey y serverURL. Despues la invocaremos en Front en App.jsx 
// y definir así la Apikey nuestra, para poder utilizar useNeskatila, y el backend contra la que vamos, local o uno ya subido a Internet.

export function initNeskatila(config) {
    Neskatila.init(config)
}