import Navbar from "../components/Navbar";
import logoTheBridge from '../assets/logo-thebrigde.png';
import logoNeskatila from '../assets/logo3.png';

function Home() {
    return(
        <>
            <div className="header"></div>
            <main className="container">
                <Navbar />
                <section className="content">
                    <h1>neskatila v1.6.0</h1>
                    <p>Neskatila es una herramienta de traducción que facilita de manera rápida y sencilla la conversión entre euskera y castellano, ofreciendo una solución eficiente para esta tarea</p>
                    <div className="images">
                        <img className="logo-thebrigde" src={logoTheBridge} alt="logo-thebridge" />
                        <img className="logo-neskatila" src={logoNeskatila} alt="logo-neskatila" />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;