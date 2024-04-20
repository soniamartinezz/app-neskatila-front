import Navbar from "../components/Navbar";
import Toggle from "../components/Toggle";

function Translate() {
    return(
        <>
            <div className="header"></div>
            <main className="container">
                <Navbar />
                <section className="content">
                    <h1>neskatila v1.6.0</h1>
                    <p>¡Explora el español y el euskera con nuestro traductor!</p>
                    <div className="translate">
                        <Toggle />
                        <textarea placeholder="Escribe un texto para empezar a traducir..."></textarea>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Translate;