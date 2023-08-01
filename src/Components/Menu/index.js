import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "./Logo.svg"
import ButtonMenu from "../ButtonMenu"

const MenuApp = styled.div`
    height: 8vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Titulo = styled.h3`
    color: #5388b0;
`

const ImagemLogo = styled.img`
    height: 25px;
    width: 25px;
`

const DivLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Btn = styled(Link)`
    text-decoration: none;
    margin-left: 50px;
    padding: 5px;
    font-weight: 600;
    font-size: 17px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: black;
    &:hover{
        cursor: pointer;
        color: #5388b0;
    }
    @media (max-width: 900px) {
        display: none;
    }
`

function Menu(){

    const itens = ['Home', 'Sobre', 'Contatos', 'Votar', 'Contar', 'Api']

    return(
        <MenuApp>
            <header>
                <DivLogo>
                    <ImagemLogo src={Logo} alt=""></ImagemLogo>
                    <Titulo>
                        Atividades
                    </Titulo>
                </DivLogo>
            </header>
            <nav>
                <ButtonMenu />
                {
                    itens.map(
                        (item, index)=>(
                            <Btn to={item === "Home"? "/": item.toLowerCase()} key={index}>{item}</Btn>
                        )
                    )
                }
            </nav>
            
        </MenuApp>
    )
}
export default Menu