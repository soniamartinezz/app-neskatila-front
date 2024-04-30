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
                    <p>El objetivo es proporcionar una solución eficiente y precisa para la comunicación bilingüe en línea entre ambos idiomas.</p>
                    <p>El proyecto Neskatila se enmarca dentro de la iniciativa del Project Break 3, correspondiente al programa de Bootcamp Full Stack Web Developer ofrecido por TheBridge. Este proyecto se ha concebido con fines demostrativos, no persigue ningún objetivo comercial. Su principal finalidad es evidenciar la competencia y los conocimientos adquiridos en el desarrollo de aplicaciones web, específicamente en la programación de interfaces de usuario (front-end) y la lógica de servidor (back-end), utilizando JavaScript como lenguaje de programación base.</p>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home;