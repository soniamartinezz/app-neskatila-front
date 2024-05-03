# Proyecto Neskatila

Neskatila es una biblioteca de traducción desarrollada y subida por nosotros a npm (https://www.npmjs.com/package/neskatila) la que facilita la conversión de textos entre castellano y euskera en entornos web.

Dentro de este proyecto esta su presentación en Web. En la cual se muestra su código, se explica su funcionamiento y se demuestra como funciona y como puede utilizarse en React. Tambien tiene un registro de usuarios, necesario para el uso de la dependencia y permite guardar sus traducciones.


## Repositorio del proyecto



El proyecto consta de tres repositorios. Un Frontend, un Backend y la Libreria Neskatila:

- Backend:

https://github.com/soniamartinezz/app-neskatila-back


- Frontend:

https://github.com/soniamartinezz/app-neskatila-front


- Librería Neskatila para su publicación en npm:

https://github.com/Mikelapra/Neskatila



En caso de descargar y usar el proyecto en local deben instalarse las dependencias.

npm install



Crear archivo .env con las variables de entorno necesarias para el correcto funcionamiento de la aplicación. En este caso, es imprescindible una variable de entorno que contenga la conexión a la base de datos Mongo y a la API Itzuli (la cual se usa para realizar las traducciones).



Para levantar los entornos:

Para el Backend:

node index.js

Para el Frontend:

npm run dev



### Tecnologías utilizadas:

Durante la realización de este proyecto se han utilizado una serie de dependencias que han aportado distintas funcionalidades:

Para ambos entornos (Frontend y Backend):

* **npm**: administrador de paquetes que permite a los desarrolladores de JavaScript trabajar con dependencias.
* **axios** : Librería utilizada para realizar solicitudes HTTP desde Node.js a nuestra Base de datos en Atlas(Almacenamiento de traducciones de usuarios), a la API itzuli (necesaria para realizar la traducción) y a GIT (Para mostrar el código de la dependencia Neskatila)

Exclusivo para entorno Backend:

* **bcrypt**: Librería para cifrar contraseñas para su almacenamiento seguro en Node.js.
* **body-parser**: Middleware usado por Express que permite tener acceso al objeto req.body cuando haces una peticion post.
* **cors**: Biblioteca de Node.js que proporciona un middleware para habilitar el intercambio entre caso para comunicar el Frontend con el Backend al tener URLs diferentes.
* **dotenv**: Paquete para Node.js que permite configurar o usar las variables de entorno en nuestro código.
* **express**: Framework de backend Node.js que permite desarrollar aplicaciones de backend escalables. Ofrece el sistema de enrutamiento y una serie de características para ampliar el propio framework.
* **firebase**: Biblioteca que proporciona herramientas para el almacenamiento de datos y autenticación de usuarios
* **mongoose**: Librería para Node.js que permite escribir consultas para una base de datos de MongooDB.

Exclusivo para entorno Frontend:

* **react**: Biblioteca para construir interfaces de usuario más dinámicas y eficientes en aplicaciones web.
	* **react-dom**: proporciona métodos específicos del DOM para React y permite renderizar y manipular componentes de React en el navegador.
	* **react-router-dom**:  permite la navegación entre diferentes componentes en una aplicación React, permitiendo la navegación de varias páginas.

Además de lo mencionado, se ha usado la herramienta **Mongo de Atlas** como base de datos para almacenar las traducciones en la aplicación.

Se utiliza la API Itzuli desarrollada por Vicomtech para poder realizar la traducciones entre euskera y español.


### BACKEND:

* **Estructura de carpetas:**

~~~

config
	db.js
	firebase.js

controllers
	controller.js
	authController.js

middlewares
	authMiddleware.js

models
	Translation.js

routes
	routesApp.js
	authRoutes.js

index.js

~~~

* **Explicación de funcionamiento del Backend:**

Desde el backend se levanta el servidor mediante Express. Incluye rutas para manejar las funcionalidades que permite a los usuarios registrarse e iniciar sesión (inicializando la aplicación Firebase y con un middleware para verificar la existencia de una sesión activa), guardar y gestionar sus traducciones (establecer la conexión con la base de datos MongoDB). Establece un modelo de datos para las traducciones y controladores para procesar las solicitudes de traducción y autenticación de usuario para el uso de la dependencia neskatila y el uso de la API itzuli para poder llevar acabo la traducción.

* **Funcionamiento en detalle de cada módulo:**


**Carpeta "config":** (Dos ficheros, db.js y firebase.js)

*/config/db.js*

Módulo que se encarga de establecer la conexión con una base de datos MongoDB:

* **require('dotenv').config()**: Carga las variables de entorno desde el archivo `.env`. De esta manera poder conectarse a la BD de MongoDB.

* **dbConnection**: Esta función asíncrona intenta conectar a la base de datos utilizando Mongoose y la codigo almacenado en .env (`process.env.MONGO_URI`). Si la conexión es exitosa, imprime un mensaje en la consola 'Base de datos conectada con éxito'. Si ocurre un error, imprime el error en la consola y 'Error a la hora de iniciar la base de datos'.


*/config/firebase.js*

Este módulo inicializa Firebase:

* **firebaseConfig**: Este objeto contiene la configuración necesaria para inicializar la aplicación Firebase. Incluye la clave de API, el dominio de autenticación, el ID del proyecto, la URL de la base de datos, el ID del remitente de mensajes, el ID de la aplicación y el ID de medición.

* **initializeApp**: Esta función inicializa la aplicación Firebase con la configuración proporcionada.


* Carpeta "controllers": (Dos ficheros, controller.js y authController.js)


*/controllers/authController.js*

Este es un módulo de autenticación de usuarios:

* **saveUser** : Función para procesar los datos del formulario de creación de usuario recogiendo los datos del cuerpo de la solicitud (nombre de usuario y contraseña), verifica si el nombre de usuario ya existe en la base de datos y, si no existe, crea un nuevo usuario con la contraseña cifrada y lo guarda en la base de datos.

* **loginUser** : Función para procesar los datos del formulario de inicio de sesión. Para ello recoge los datos del cuerpo de la solicitud (nombre de usuario y contraseña), verifica si el nombre de usuario existe en la base de datos y, si existe, comprueba si la contraseña proporcionada coincide con la contraseña almacenada en la base de datos. Si la contraseña es correcta, inicia una sesión para el usuario.


*/controllers/controller.js*

Módulo de controlador para autentificarse en la API Itzuli y realizar traducciones.

* **config**: Configuración de la solicitud HTTP, incluyendo la autorización que utiliza la clave de API almacenada en las variables de entorno.

* **translateWord**: Función para realizar la solicitud de traducción realizando una solicitud POST a la API de traducción con los parámetros necesarios (palabra a traducir, idioma original y idioma final). Si la solicitud es exitosa, devuelve los datos de la respuesta. Si ocurre un error, lanza un error.

* **saveTranslation**: Función para guardar la traducción en la base de datos. Recoge los datos del cuerpo de la solicitud (nombre de usuario y texto traducido), crea un nuevo objeto de traducción y lo guarda en la base de datos. Si los datos necesarios no están presentes en el cuerpo de la solicitud, devuelve un error. Si ocurre un error al guardar la traducción, también devuelve un error.



**Carpeta "middlewares":** (Un fichero, authMiddleware.js)

*/middleware/authMiddleware.js*

Este modulo define un middleware para verificar si existe una sesión activa:

* **require('dotenv').config()**: Para la configuración de dotenv. Carga las variables de entorno desde el archivo .env. Para guardar así las claves y evitar subir esta información, añadiendo .env en .gitignore, al repositorio GIT.

* **checkSessionMiddleware**: Middleware de verificación de sesión, se ejecuta antes de llegar a las rutas de la aplicación. Verifica si existe una sesión activa comprobando si req.session y req.session.username existen. Si existen, llama a next() para pasar al siguiente middleware o ruta. Si no existen, redirige al usuario a la página de inicio de sesión con res.redirect('/login').


**Carpeta "models":** (Un fichero, Translation.js)

*/models/Translation.js*

Modulo para definir el modelo de objeto para recoger las traducciones que se van a guardar en BD utilizando Mongoose:

* **TranslationSchema**: Define la estructura de los datos para el objeto de las traducciónes a guardas. Cada traducción tiene un nombre de usuario (userName), un texto (texto) que es un array, y un idioma original (sourceLanguage). Además, se añade un campo de marcas de tiempo (timestamps) que Mongoose maneja automáticamente para registrar cuándo se creó y se actualizó por última vez cada documento.

* **Translation**: Crea un modelo a partir de "TranslationSchema". Este modelo se utilizará para crear y leer documentos de la base de datos.


**Carpeta "routes":** (Dos ficheros, routesApp.js y authRoutes.js)

*/routes/routesApp.js*

Módulo para las rutas en Node.js utilizando Express.

* **router.all('/')** Ruta (GET/POST) para realizar la traducción: Esta ruta acepta tanto solicitudes GET como POST. Se encarga de validar la apiKey y los parámetros de la URL (palabra a traducir, idioma original y idioma final). Luego, llama a la función "translateWord" importada de "controllers/controller.js" para realizar la traducción y devuelve el resultado.

* **router.post("/traducir")** Ruta para guardar una traducción: Esta ruta acepta solicitudes POST para guardar una traducción. Recoge los datos del cuerpo de la solicitud (nombre de usuario, texto a traducir, idioma original), crea un nuevo objeto de traducción y lo guarda en la base de datos.

* **router.get('/traducciones-guardadas/:username')** Ruta para mostrar todas las traducciones guardadas: Esta ruta acepta solicitudes GET y devuelve todas las traducciones guardadas por un usuario específico. Busca en la base de datos todas las traducciones que corresponden al nombre de usuario proporcionado en la URL.

* **router.delete('/traducciones-guardadas/:username')** Ruta para eliminar todas las traducciones de un usuario guardadas en BD: Esta ruta acepta solicitudes DELETE y elimina todas las traducciones guardadas por un usuario específico. Busca en la base de datos todas las traducciones que corresponden al nombre de usuario proporcionado en la URL y las elimina.


*/routes/authRoutes.js*

Módulo de rutas para autenticación en Node.js utilizando Express.

* **(router.get('/registro') y router.post('/registro', controllerAuth.saveUser)**: La primera ruta muestra la página de registro y la segunda ruta maneja la solicitud POST para registrar un nuevo usuario. Cuando se envía el formulario de registro, se llama a la función "saveUser" importado de "controllers/authController" para guardar el nuevo usuario en la base de datos.

* **(router.get('/login') y router.post('/login', controllerAuth.loginUser)**: La primera ruta muestra la página de inicio de sesión y la segunda ruta maneja la solicitud POST para iniciar sesión de un usuario. Cuando se envía el formulario de inicio de sesión, se llama a la función "loginUser" importado de "controllers/authController" para verificar las credenciales del usuario.


*/index.js*

Módulo principal del backend de la Web:

Se importan los módulos necesarios y se crea una nueva aplicación Express. Se establece el puerto en el que se escucharán las solicitudes.

Se configura la aplicación para usar varios middleware, incluyendo CORS (para permitir solicitudes de origen cruzado), express-session (para manejar las sesiones de usuario), y body-parser (para parsear el cuerpo de las solicitudes HTTP).

Se invoca función "dbConnection", importada de "/config/db", para conectar a la base de datos.

Se importan y se utilizan dos módulos de rutas, uno para las rutas generales de la Web y otro para las rutas de autenticación.

### FRONTEND:

Este Frontend se explicará desde un punto de vista de usabilidad del entorno desde la perspectiva del usuario.

El propósito principal de nuestro sitio web es presentar la dependencia Neskatila, proporcionar una explicación detallada de su funcionamiento y demostrar su utilidad.

Nuestro sitio web permite el registro de usuarios. Al seleccionar la opción "Iniciar sesión", los usuarios pueden registrarse o acceder a su cuenta si ya se han registrado previamente. Al registrarse, los usuarios obtienen la capacidad de utilizar la dependencia Neskatila, recibiendo un código y una URL del servidor que se muestran de manera constante durante su sesión en la parte superior de la pantalla. Estos datos son necesarios para inicializar la dependencia (se proporciona una explicación más detallada en la pestaña "Normas de uso" y en la sección de la dependencia en este Readme). Además, los usuarios registrados tienen la posibilidad de guardar las traducciones que realicen en la sección "Traductor" (se proporciona una explicación más detallada en la sección "Traductor").

La interfaz de nuestro sitio web se organiza en varias pestañas, que se muestran y distribuyen en la parte superior de la pantalla. Los usuarios pueden acceder a las diferentes secciones haciendo clic en las respectivas pestañas. La pestaña "Introducción" sirve como página de inicio de nuestro sitio web."

* Pestaña "Introducción":

Página de Inicio, o Home, del sitio Web Neskatila. Explicación al usuario de que es Neskatila y su objetivo, explicación breve de la distribución en el entorno Web y mención especial a la API itzuli utilizada para desarrollar la dependencia Neskatila. Tambien hay un Link a la dependencia neskatila en NPM.

* Pestaña "Código": 

Mediante una llamada con Axios al repositorio GIT donde se guarda el código de la dependencia Neskatila, el usuario podrá acceder a las carpetas que la componen clicando sobre ellos. Se mostrará el código con anotaciones aclaratorias de la funcionalidad.

* Pestaña "Normas de uso": 

Explicación de lo necesario para la instalación de neskatila y su funcionamiento.

* Pestaña "Traductor": 

Esta sección proporciona una demostración visual de cómo Neskatila traduce los textos dentro de un entorno web o aplicación introduciendo textos en el Input como si de una propia Web se tratase. Esto elimina la necesidad de introducir manualmente los textos en euskera en su código.

La traducción del texto entre español y euskera es gracias a la dependencia Neskatila. El componente maneja el estado del texto a traducir, el idioma de traducción seleccionado y si se está realizando una traducción. Los usuarios pueden cambiar el idioma de traducción clicando en el boton ‘Euskera -> Español’ o ‘Español -> Euskera y el texto introducido en el Input se traducirá automáticamente. Los usuarios también pueden guardar sus traducciones clickando en "guardar" (las traducciones se guardaráne MongoDB) para acceder a ellas más tarde, clicando en traducciones guardadas te llevara otro. Durante una traducción, se muestra un componente Spinner para indicar que la traducción está en progreso

* Pestaña "Componentes Dependencia:

Aquí se muestran ejemplos en React de como se puede hacer uso de la dependencia para crear diferentes componentes. Actualmente se muestran dos componentes y como utilizarlos, `AutoTranslatedLabel` y `AutoTranslateTextArea`

* El componente `AutoTranslatedLabel`: se utiliza para traducir automáticamente su contenido utilizando el hook personalizado useNeskatila. Este componente recibe varias propiedades, incluyendo el texto a traducir (value), el idioma original del texto (sourceLanguage), el idioma al que se traducirá el texto (targetLanguage), y una cadena opcional para aplicar estilos CSS al componente (css).

    Al montar el componente, se invoca la función translate para traducir el valor proporcionado en las propiedades del componente. El resultado se guarda en el estado del componente y se muestra en el renderizado del componente. Además, el componente se actualiza automáticamente cuando cambian los idiomas de origen o destino, gracias al hook useEffect.

    Finalmente, el componente devuelve un elemento span que contiene el texto traducido.

* El componente `AutoTranslateTextArea`: Es un input que traduce automáticamente su contenido utilizando el hook `useNeskatila`. Este componente recibe dos propiedades: `sourceLanguage`, idioma original, y `targetLanguage`, el idioma al que se traducirá el texto.

    Cuando el usuario introduce texto en el input, la función `handleChange` se activa, actualizando el estado `textAreaValue` con el texto introducido. Cuando el usuario deja de interactuar con el input (evento `onBlur`), se activa la función `handleTranslate`. Esta función utiliza la función `translate` proporcionada por `useNeskatila` para traducir el texto del idioma de origen al idioma de destino. El resultado de la traducción se guarda en el estado `textAreaValue` y se muestra en el input.


    Ambos componentes utiliza PropTypes para validar las propiedades que se pasan al componente. Esto es útil para la detección temprana de errores al recibir propiedades con valores incorrectos, asegurando que las propiedades cumplen con los valores esperados para este componente. 



* Pestaña "Versiones": 

    Es una tabla resumen de la versión actual e historicos de Neskatila con los cambios introducidos en cada una de las versiones.



### La dependencia neskatila:

Dependencia ya disponible en npm, https://www.npmjs.com/package/neskatila. Su repositorio en GIT, https://github.com/Mikelapra/Neskatila (se puede visualizar tambien en la pestaña Código).

Esta librería consta de tres archivos principales: Neskatila.js, useNeskatila.js e index.js.

* Neskatila.js: Define la clase Neskatila que tiene dos métodos estáticos principales, init y translate. El método init se utiliza para inicializar la configuración de la biblioteca con una clave API y una URL del servidor. El método translate es una función asíncrona que realiza una solicitud GET a la URL del servidor para traducir una palabra del idioma de origen al idioma de destino.

* useNeskatila.js: Exporta un hook personalizado llamado "useNeskatila" que devuelve un objeto con el método "translate" de la clase "Neskatila".

* index.js: Este archivo simplemente reexporta useNeskatila y initNeskatila para que puedan ser importados desde la biblioteca Neskatila.

Como subirla a npm:

* Para crear el proyecto de librería:

	npm create vite@latest
	name: neskatila
	Framework: React
	Variant: Javascript
	cd neskatila
	npm install 
	
* Para compilar y publicar el módulo:
 
	//build the components and make sure dist folder is created
	npm run build

	//Make sure you have a npm account before you do this
	//VS code will prompt to login to you account using the otp send 
	//to your email id
	npm login

	//This will publish the package
	//Make sure the "version": "1.0.1" in the package.json is incremented
	//before every publish
	npm publish

Sus normas de uso son los siguiente:

* Pasos previos necesarios:

Es importante que los usuarios se registren para poder hacer uso de la aplicación.

Es necesario instalar la dependencia Axios.

npm install axios

* Pasos previos opcionales:

Para poder hacer uso de los ejemplos de componentes en React que se incluyan en la dependencia, los usuarios deberán instalarse React.

npm i react

* Pasos a seguir:

1.- Instalación: Los usuarios necesitan instalar la dependencia en su proyecto.

npm install neskatilla

2.- Inicialización: Para poder utilizar Neskatila, es necesario que los usuarios la inicialicen utilizando la clave API y la serverURL que se les proporciona al estar registrados en nuestra aplicación web.

Para ello, deberán importarse { initNeskatila } a su fichero:

import { initNeskatila } from 'neskatila';

Una vez hecho, deben invocar { initNeskatila } y pasar un objeto con la configuración de su clave API y serverURL proporcionadas.

Neskatila.init({ apiKey: 'tu_clave_api', serverURL: 'url_del_servidor' });

Si no se proporciona una serverURL, se usará 'http://localhost:3000' por defecto.

3.- Importación: Los usuarios pueden importarla en su archivo.

import { useNeskatila } from 'neskatila';

4.- Traducción: Ahora los usuarios pueden usar el método translate para traducir textos. Este método es una función asíncrona que realiza una solicitud GET al servidor especificado en la URL del servidor, por lo que necesitarán usar await o .then() para manejar la respuesta. Esta solicitud incluye como parámetros de consulta los idiomas de origen y destino y el texto a traducir.

Por ejemplo:

let palabraTraducida = await Neskatila.translate('eu', 'es', 'kaixo');

console.log(palabraTraducida);

Este código traducirá la palabra 'kaixo' del euskera al castellano.

5.- Uso del Hook: También pueden usar el hookuseNeskatilapara acceder al método{ translate }.

Por ejemplo: Este código hace lo mismo que el anterior, pero utilizando el hook 'useNeskatila'.


const { translate } = useNeskatila();
let palabraTraducida = await translate('eu', 'es', 'kaixo');
console.log(palabraTraducida);


