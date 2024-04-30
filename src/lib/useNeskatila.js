// importamos neskatila y creamos un Hook basándonos solo en el método "translate" definido en el class Neskatila. Gracias a static podemos usarlo directamente desde la clase sin crear un instancia "new".

import {
    Neskatila
} from './neskatila';

export const useNeskatila = () => {
    return {
        translate: Neskatila.translate
    }
}