import Toggle from "../components/Toggle";
import Footer from "../components/Footer";

function Translate() {
    return(
        <>
            <main className="container">
                <section className="content">
                    <h1>neskatila</h1>
                    <p>¡Explora el español y el euskera con nuestro traductor!</p>
                    <div className="translate">
                        <Toggle />
                        <textarea placeholder="Escribe un texto para empezar a traducir..."></textarea>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Translate;