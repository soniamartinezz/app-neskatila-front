import Footer from '../components/Footer';
import logoTheBridge from '../assets/logo-thebrigde.png';
import logoNeskatila from '../assets/logo.png';

function Home() {
    return(
        <>
            <main className="container">
                <section className="content">
                    <h1>Neskatila &nbsp;<span className='version'>v1.0.3</span></h1> 
                    <div className="images">
                        <img className="logo-thebrigde" src={logoTheBridge} alt="logo-thebridge" />
                        <img className="logo-neskatila" src={logoNeskatila} alt="logo-neskatila" />
                    </div>
                   <div className="info">
                    <h2>¿Qué es Neskatila?</h2>
                    <p>Se trata de una librería de traducción diseñada para facilitar la rápida conversión de textos entre castellano y euskera en entornos web. Neskatila utiliza un cliente HTTP para enviar solicitudes a un servidor que cuenta con una API exclusiva para traducciones en euskera. Neskatila está disponible para su descarga e instalación en <a href="https://www.npmjs.com/package/neskatila" target="_blank">NPM</a>.</p>
                    <p>El propósito de esta librería es ofrecer una solución eficiente y precisa para la comunicación bilingüe en línea entre ambos idiomas.</p>
                    <p>Neskatila es un proyecto incluido en la iniciativa Project Final del programa de Bootcamp Full Stack Web Developer ofrecido por <a href="https://www.thebridge.tech/" target="_blank">The Bridge | Digital Talent Accelerator</a>. Su propósito es puramente demostrativo, sin ningún objetivo comercial. La meta principal de Neskatila es mostrar la competencia y los conocimientos adquiridos en el desarrollo de aplicaciones web, centrándose en la programación tanto del front-end como del back-end, utilizando JavaScript como lenguaje principal.</p>

                    <h2>¿Qué ofrece la aplicación Neskatila?</h2>
                    <ul>
                        <li><b>Código</b>: Muestra el código de Neskatila en JavaScript junto con anotaciones aclaratorias.</li>
                        <li><b>Normas de uso</b>: Explica los pasos necesarios para la instalación y el correcto funcionamiento de Neskatila.</li>
                        <li><b>Traductor</b>: Presenta una demostración visual para el usuario sobre cómo Neskatila traduce los textos en su entorno web o aplicación, eliminando la necesidad de ingresar manualmente textos en euskera en la programación.</li>
                        <li><b>Uso con React</b>: Exhibe ejemplos de React que ilustran cómo utilizar la dependencia para crear diferentes componentes.</li>
                        <li><b>Versiones</b>: Ofrece un resumen de la versión actual y el historial de versiones anteriores de Neskatila.</li>
                    </ul>
                    
                    <h2>Mención y agradecimiento especial</h2>
                    <p>Esta dependencia Neskatila ha sido posible gracias a la <a href="https://itzuli.vicomtech.org/es/api/" target="_blank">API Itzuli</a> desarrollada por <a href="https://www.vicomtech.org/es/" target="_blank">Vicomtech</a>, quienes nos han otorgado autorización para utilizarla en este proyecto.</p>
                   </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home;