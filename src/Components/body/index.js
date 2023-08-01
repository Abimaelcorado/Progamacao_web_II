import styled from "styled-components"
import Imagem from "./Imagem.svg"

const Infomation = styled.div`
    width: 500px;
    margin-left: 100px;
    margin-right: 100px;
    min-widht: 550px;
`

const TitleInfomation = styled.h1`
    font-size: 50px;
    font-weight: bolder;
    color: #414141;
`

const SubtitleInfomation = styled.h4`
    font-size: 20px;
    font-weight: bolder;
    color: #414141;
`

const ButtonGit = styled.button`
    border: none;
    outline: none;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 35px;
    padding-right: 35px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 600;
    color: #ffffff;
    background-color: #5388b0;
    &:hover{
        cursor: pointer;
        background-color: #81a8c5;
    }

`

const ImagemOla = styled.img`
    width: 350px
`

const ContainerInfoImage = styled.div`
    height: 92vh;   
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    min-widht: 1465;
`

function Body() {
    return(
        <ContainerInfoImage>
            <Infomation>
                <TitleInfomation>Central de atividades</TitleInfomation>
                <SubtitleInfomation>Meu nome é Abimael da Cunha Corado, e essa e uma página desenvolvida para organizar minhas atividades.</SubtitleInfomation>
                <a href="https://github.com/Abimaelcorado/Progamacao_web_II"><ButtonGit>Git hub</ButtonGit></a>
            </Infomation> 
            &nbsp; 
            <ImagemOla src={Imagem} alt=""></ImagemOla>
        </ContainerInfoImage>
    )
}
export default Body