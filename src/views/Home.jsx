import Footer from '../components/Footer';
import logoTheBridge from '../assets/logo-thebrigde.png';
import logoNeskatila from '../assets/logo3.png';

function Home() {
    return(
        <>
            <main className="container">
                <section className="content">
                    <h1>Neskatila</h1> 
                    <h2>v1.0.3</h2>
                    <div className="images">
                        <img className="logo-thebrigde" src={logoTheBridge} alt="logo-thebridge" />
                        <img className="logo-neskatila" src={logoNeskatila} alt="logo-neskatila" />
                    </div>
                    <h2>¿Que es Neskatila?</h2>
                    <p>Neskatila es una biblioteca de traducción que facilita la conversión sencilla y rápida de textos entre castellano y euskera en entornos web. Esta biblioteca utiliza un cliente HTTP para realizar llamadas a un servidor en el cual accede a una API exclusivo para traducciones en euskera.</p>
                    <p>El objetivo de esta dependecia es proporcionar una solución eficiente y precisa para la comunicación bilingüe en línea entre ambos idiomas.</p>
                    <p>El proyecto Neskatila se enmarca dentro de la iniciativa del Project Break 3, correspondiente al programa de Bootcamp Full Stack Web Developer ofrecido por TheBridge. Este proyecto se ha concebido con fines demostrativos, no persigue ningún objetivo comercial. Su principal finalidad es evidenciar la competencia y los conocimientos adquiridos en el desarrollo de aplicaciones web, específicamente en la programación de interfaces de usuario (front-end) y la lógica de servidor (back-end), utilizando JavaScript como lenguaje de programación base.</p>
                    <h2>¿Que me ofrece la Web Neskatila?</h2>
                    <p>En el sitio Web de Neskatila te ofrecemos lo necesario para comprender la dependencia. Desde lo necesario para su instalación, las normas para su funcionamiento y demostración en real de los resultados del uso de Neskatila.</p>
                    <p>Pestaña "Cógido": Te mostramos el código en Javascript y anotaciones aclaratorias de neskatila.</p>
                    <p>Pestaña "Normas de uso": Explicamos lo necesario para la instalación de neskatila y su funcionamiento.</p>
                    <p>Pestaña "Traductor": Demostración visual para el usuario de como neskatila traduce los textos de su entorno Web o aplicación. De esta manera no sería necesario introducir manualmente los textos en euskera en tu programación.</p>
                    <p>Pestaña "Componentes Dependencia": Ejemplos de React de como se puede hacer uso de la dependencia para crear diferentes componentes</p>
                    <p>Pestaña "Versiones": Resumen de la versión actual e historicos de Neskatila</p>
                    <h2>Mención y agradecimiento especial</h2>
                    <p>Esta dependencia Neskatila ha sido posible gracias a la API Itzuli desarrollada por Vicomtech los cuales nos han dado permiso en su utilización para este proyecto</p>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home;