import { useState } from "react"

function Contatos(event) {
    const [valor, setValor] = useState(0)
    return(
        <>
            <h3>Contatos</h3>
            <textarea onChange={(event) => (setValor(event.target.value.length))} maxLength={80} rows={4}></textarea>
            {valor}
        </>
    )
}
export default Contatos