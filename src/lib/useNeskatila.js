// Importamos la clase Neskatila y creamos un Custom Hook que utiliza unicamente el metodo translate de Neskatila. 
// Gracias a que translate es un metodo estatico("static"), podemos usarlo directamente desde la clase sin necesidad de crear una instancia con "new".

import {
    Neskatila
} from './neskatila';

export const useNeskatila = () => {
    return {
        translate: Neskatila.translate
    }
}