import styled from "styled-components"

const BtnMenu = styled.button`
    display: none;
    border: none;
    outline: none;
    text-decoration: none;
    margin-left: 50px;
    padding: 5px;
    font-weight: 600;
    font-size: 17px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: black;
    background-color: #ffffff;
    align-items: center;
    @media (max-width: 900px) {
        display: block;
    }
`

function ButtonMenu() {

    return(
        <BtnMenu >Menu</BtnMenu>
    )
}
export default ButtonMenu