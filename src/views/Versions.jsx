function Versions() {


    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Current Tags</th>
                        <th>Version</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>1.0.3</td>
                        <td>Se incluye la función initNeskatila para autenticarse</td>
                        <td>Se incluye la componente AutoTranslatedLabel (Necesario React)</td>
                        <td>Se incluye la componente AutoTranslateTextArea (Necesario React)</td>
                    </tr>
                </tbody>
            </table>

            <table>
                <thead>
                    <tr>
                        <th>Version History</th>
                        <th>Version</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>1.0.3</td>
                        <td>Correcciones de código</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>1.0.1</td>
                        <td>Correcciones de código</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>1.0.0</td>
                        <td>Primera prueba de cómo funciona npm</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Versions;