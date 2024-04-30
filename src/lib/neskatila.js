import axios from 'axios';

//Orientación a objetos. "class" se utiliza para definir objetos, es como un molde para crear objetos basandose en los atributos y funciones que tiene dentro.
//En este caso crearimos un objeto llamado "Neskatila" en que vamos a crear un objeto con dos propiedades apikey e serverURL.


export class Neskatila {
    apiKey = ""
    serverURL = ""


// "Static",método estático, lo ponemos para poder usar (o invocar) la función (o método) "init" y "translate" sin necesidad de tener que crear una instacia 
// (sin crear un objeto definido en Class Neskatila). Es decir, sin tener que crear un instancia con un "new" (como hacemos con mongoose para definir el objeto que va a la base de datos)
// Hacemos esto para que en el front, en App.jsx, podamos definir contra que backen va. Si es local o uno ya subido a Internet.
// Apikey es nuestro codigo de seguridad para que solo usuarios registrados puedan usarlo.

    static init(config) {
        this.apiKey = config.apiKey;
        this.serverURL = config.serverURL || "http://localhost:3000";
    }

//Llamada mediante axios al backen, local o de internet dependiendo de como se defina en init.

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

// Creamos la funcion initNekatila la cual recibe un objeto formado por las propiedades que definidas en la función (o método) init, apiKey y serverURL. Despues la invocaremos en front en App.jsx 
// y definir así la Apikey nuestra, para poder utilizarla useNeskatila, y el backen contra la que vamos local o uno ya subido a Internet.

export function initNeskatila(config) {
    Neskatila.init(config)
}