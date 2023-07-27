import { useState } from "react"
import styled from "styled-components"

const Card = styled.div`
    display: flex;
    height: 60vh;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

function Contador() {

    const [numero, setNumero] = useState(0)

    const adiciona = () => (setNumero(numero + 1))
    const retira = () => (setNumero(numero - 1))

    const [Checked, setChecked] = useState(false);

    const verifica = () => {
        setChecked(!Checked);
    };

    return(
        <>
            <Card>
                <h1>{numero}</h1>
                <button onClick={adiciona}>Adicionar</button>
                <button onClick={retira}>Tirar</button>
            </Card>
            <input type="checkbox" onClick={verifica}></input>
            {Checked ? "Marcado": "Desmarcado"}
        </>
    )
}
export default Contador