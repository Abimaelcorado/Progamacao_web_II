import imagem from "./NotFound.svg"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Imgnotfound = styled.img`
    width: 300px;
    height: 300px;
`

function NaoEncontrada() {
    return(
        <Container>
            <Imgnotfound src={imagem} alt="Imagem" />
            <h3>Pagina não encontrada!</h3>
        </Container>
    )
}
export default NaoEncontrada