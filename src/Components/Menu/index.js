import { Link } from "react-router-dom"
import styled from "styled-components"

const MenuApp = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: right;
    min-width: 300px;
`

const Btn = styled(Link)`
    text-decoration: none;
    margin: 10px;
    font-size: 17px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: black;
    &:hover{
        cursor: pointer;
    }
`

function Menu(){

    const itens = ['Home', 'Sobre', 'Contatos', 'Votar', 'Contar']

    return(
        <MenuApp>
            {
                itens.map(
                    (item, index)=>(
                        <Btn to={item === "Home"? "/": item.toLowerCase()} key={index}>{item}</Btn>
                    )
                )
            }
        </MenuApp>
    )
}
export default Menu