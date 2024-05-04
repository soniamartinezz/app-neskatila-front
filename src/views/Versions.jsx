import Footer from "../components/Footer";

function Versions() {
    return(
        <>
            <main className="container">
                <section className="content versions">
                    <table>
                        <thead>
                            <tr>
                                <th>Version</th>
                                <th>Updates</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.0.3</td>
                                <td>
                                    <ul>
                                        <li>Se incluye el componente AutoTranslateTextArea (Necesario React)</li>
                                        <li>Se incluye el componente AutoTranslatedLabel (Necesario React)</li>
                                        <li>Se incluye la función initNeskatila para autenticarse</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table>
                        <thead>
                            <tr>
                                <th>Version History</th>
                                <th>Updates</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.0.2</td>
                                <td>Correcciones de código</td>
                            </tr>
                            <tr>
                                <td>1.0.1</td>
                                <td>Correcciones de código</td>
                            </tr>
                            <tr>
                                <td>1.0.0</td>
                                <td>Primera prueba de cómo funciona npm</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Versions;