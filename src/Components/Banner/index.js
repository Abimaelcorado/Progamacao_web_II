import styled from "styled-components"
import imagemlogo from "./logo.png"

const ContainerBanner = styled.div`
    height: 180px;
    width: 100vw;
    background-image: url(${imagemlogo});
    display: flex;
    flex-direction: column;
    justify-content: end;
    min-width: 300px;
`

const TitleBanner = styled.h3`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 200%;
    color: rgb(0, 0, 0);
    font-weight: 900;
    letter-spacing: 0.5px;
    margin: 10px;
`

const SubtitleBanner = styled.h4`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    color: rgb(73, 73, 73);
    letter-spacing: 0.5px;
    margin: 10px;
`

function Banner(){
    return(
        <ContainerBanner>
            <TitleBanner>Mural de Atividades</TitleBanner>
            <SubtitleBanner>Progamação para Web II</SubtitleBanner>
        </ContainerBanner>
    )
}
export default Banner