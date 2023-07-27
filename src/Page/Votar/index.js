import { useState } from "react"
import styled from "styled-components"
import imagemcandidatoa from "./candidatoa.svg"
import imagemcandidatob from "./candidatob.svg"

const Box = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const Candidato = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 30px;
`

const Imagem = styled.img`
    height: 200px;
`

const Btn = styled.button`
    position:relative;
    display:inline-block;
    margin:20px;
    width: 200px;
    margin: 1%;
    margin-top: 20px;
    color: white;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    background-color: #ffa12b;
    display: block;
    position: relative;
    padding: 20px 40px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-shadow: 0px 1px 0px #000;
    filter: dropshadow(color=#000, offx=0px, offy=1px);
    -webkit-box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 #915100;
    -moz-box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 #915100;
    box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 #915100;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;

    &:active {
        top: 10px;
        background-color: #f78900;
        -webkit-box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 #915100;
        -moz-box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 #915100;
        box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 #915100;
    }

    &:after {
        content: "";
        height: 100%;
        width: 100%;
        padding: 4px;
        position: absolute;
        bottom: -15px;
        left: -4px;
        z-index: -1;
        background-color: #2b1800;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }
`

function Votar() {

    const [votoscandidatoA, setVotoscandidatoA] = useState(0)
    const contagemvotoscandidatoA = () => (setVotoscandidatoA(votoscandidatoA + 1))

    const [votoscandidatoB, setVotoscandidatoB] = useState(0)
    const contagemvotoscandidatoB = () => (setVotoscandidatoB(votoscandidatoB + 1))

    return(
        <Box>
            <Candidato>
                <Imagem src={imagemcandidatoa} alt="Candidato A"></Imagem>
                <Btn onClick={contagemvotoscandidatoA}>Candidato A : {votoscandidatoA}</Btn>
            </Candidato>
            <Candidato>
                <Imagem src={imagemcandidatob} alt="Candidato B"></Imagem>
                <Btn onClick={contagemvotoscandidatoB}>Candidato B : {votoscandidatoB}</Btn>
            </Candidato>
        </Box>
    )
}
export default Votar